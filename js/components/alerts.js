/**
 * Componente de Alertas MDM
 */

import { DOM, removeElementWithAnimation } from "../utils/dom.js";
import { alertItemTemplate, emptyAlertTemplate } from "../utils/templates.js";
import { renderDeviceList } from "./devices.js";

/**
 * Renderiza a lista de alertas
 * @param {Array} alerts - Lista de alertas
 */
export function renderAlerts(alerts) {
  if (!DOM.alertsList || !DOM.alertsCard) return;

  // Renderiza lista de dispositivos
  renderDeviceList(DOM.alertsCard);

  // Limpa e renderiza alertas
  DOM.alertsList.innerHTML = alerts.map(alertItemTemplate).join("");

  // Adiciona itens vazios para preencher espaço
  addEmptyAlertItems(2);
}

/**
 * Adiciona itens vazios à lista
 * @param {number} count - Quantidade de itens
 */
function addEmptyAlertItems(count) {
  const emptyItems = Array(count)
    .fill(null)
    .map(() => emptyAlertTemplate())
    .join("");
  DOM.alertsList.innerHTML += emptyItems;
}

/**
 * Remove um alerta com animação
 * @param {HTMLElement} button - Botão de delete clicado
 */
export function deleteAlert(button) {
  const alertItem = button.closest(".alert-item");
  if (!alertItem) return;

  removeElementWithAnimation(alertItem);
}
