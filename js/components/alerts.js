import { DOM, removeElementWithAnimation } from "../utils/dom.js";
import { alertItemTemplate, emptyAlertTemplate } from "../utils/templates.js";
import { renderDeviceList } from "./devices.js";

export function renderAlerts(alerts) {
  if (!DOM.alertsList || !DOM.alertsCard) return;

  renderDeviceList(DOM.alertsCard);
  DOM.alertsList.innerHTML = alerts.map(alertItemTemplate).join("");
  addEmptyAlertItems(2);
}

function addEmptyAlertItems(count) {
  const emptyItems = Array(count)
    .fill(null)
    .map(() => emptyAlertTemplate())
    .join("");
  DOM.alertsList.innerHTML += emptyItems;
}

export function deleteAlert(button) {
  const alertItem = button.closest(".alert-item");
  if (!alertItem) return;

  removeElementWithAnimation(alertItem);
}
