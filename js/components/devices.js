/**
 * Componente de Dispositivos
 */

import { DOM } from "../utils/dom.js";
import { deviceCardTemplate } from "../utils/templates.js";

/**
 * Renderiza a lista de dispositivos no cabeçalho dos cards
 * @param {HTMLElement} container - Container do card
 */
export function renderDeviceList(container) {
  const deviceList = container?.querySelector(".device-list");
  if (!deviceList) return;

  deviceList.innerHTML = "";

  // Importa deviceTypes do escopo global (api-data.js)
  if (typeof deviceTypes === "undefined") {
    console.error("deviceTypes não está definido");
    return;
  }

  deviceTypes.forEach((device) => {
    const listItem = document.createElement("li");
    listItem.className = "device-item";
    listItem.setAttribute("data-device", device.name);
    listItem.textContent = device.name;
    deviceList.appendChild(listItem);
  });
}

/**
 * Renderiza o grid de dispositivos cadastrados
 * @param {Array} devices - Lista de dispositivos
 */
export function renderDevices(devices) {
  if (!DOM.devicesGrid) return;

  DOM.devicesGrid.innerHTML = devices.map(deviceCardTemplate).join("");
}

/**
 * Renderiza informações de subscrição
 * @param {Object} subscription - Dados da subscrição
 */
export function renderSubscription(subscription) {
  // Status da subscrição
  if (DOM.subscriptionStatus) {
    DOM.subscriptionStatus.textContent = `${subscription.plan} subscription until ${subscription.expirationDate} (${subscription.daysLeft} days left)`;
  }

  // Texto de licenças
  if (DOM.licenseText) {
    DOM.licenseText.textContent = `${subscription.licensesUsed} licenses used of ${subscription.licensesTotal} available`;
  }

  // Barra de progresso
  if (DOM.licenseProgress) {
    const percentage =
      (subscription.licensesUsed / subscription.licensesTotal) * 100;
    DOM.licenseProgress.style.width = `${percentage}%`;
  }
}
