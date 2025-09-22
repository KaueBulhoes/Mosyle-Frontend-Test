/**
 * Componente Quick Access
 */

import { DOM } from "../utils/dom.js";
import {
  quickAccessTemplate,
  emptyQuickAccessTemplate,
} from "../utils/templates.js";
import { renderDeviceList } from "./devices.js";

/**
 * Renderiza Quick Access Profiles
 * @param {Array} items - Lista de itens de acesso rápido
 */
export function renderQuickAccess(items) {
  if (!DOM.quickAccessList || !DOM.quickAccessCard) return;

  // Renderiza lista de dispositivos
  renderDeviceList(DOM.quickAccessCard);

  // Limpa e renderiza itens
  DOM.quickAccessList.innerHTML = items.map(quickAccessTemplate).join("");

  // Adiciona itens vazios
  addEmptyQuickAccessItems(8);
}

/**
 * Adiciona itens vazios à lista
 * @param {number} count - Quantidade de itens
 */
function addEmptyQuickAccessItems(count) {
  const emptyItems = Array(count)
    .fill(null)
    .map(() => emptyQuickAccessTemplate())
    .join("");
  DOM.quickAccessList.innerHTML += emptyItems;
}
