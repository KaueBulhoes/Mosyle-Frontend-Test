import { DOM } from "../utils/dom.js";
import { deviceCardTemplate } from "../utils/templates.js";

export function renderDeviceList(container) {
  const deviceList = container?.querySelector(".device-list");
  if (!deviceList) return;

  deviceList.innerHTML = "";

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

export function renderDevices(devices) {
  if (!DOM.devicesGrid) return;

  DOM.devicesGrid.innerHTML = devices.map(deviceCardTemplate).join("");
}

export function renderSubscription(subscription) {
  if (DOM.subscriptionStatus) {
    DOM.subscriptionStatus.textContent = `${subscription.plan} subscription until ${subscription.expirationDate} (${subscription.daysLeft} days left)`;
  }

  if (DOM.licenseText) {
    DOM.licenseText.textContent = `${subscription.licensesUsed} licenses used of ${subscription.licensesTotal} available`;
  }

  if (DOM.licenseProgress) {
    const percentage =
      (subscription.licensesUsed / subscription.licensesTotal) * 100;
    DOM.licenseProgress.style.width = `${percentage}%`;
  }
}
