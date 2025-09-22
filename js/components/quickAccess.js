import { DOM } from "../utils/dom.js";
import {
  quickAccessTemplate,
  emptyQuickAccessTemplate,
} from "../utils/templates.js";
import { renderDeviceList } from "./devices.js";

export function renderQuickAccess(items) {
  if (!DOM.quickAccessList || !DOM.quickAccessCard) return;

  renderDeviceList(DOM.quickAccessCard);

  DOM.quickAccessList.innerHTML = items.map(quickAccessTemplate).join("");

  addEmptyQuickAccessItems(8);
}

function addEmptyQuickAccessItems(count) {
  const emptyItems = Array(count)
    .fill(null)
    .map(() => emptyQuickAccessTemplate())
    .join("");
  DOM.quickAccessList.innerHTML += emptyItems;
}
