/**
 * Componente de Support Tickets
 */

import { DOM } from "../utils/dom.js";
import { ticketItemTemplate, emptyTicketTemplate } from "../utils/templates.js";

/**
 * Renderiza lista de tickets
 * @param {Array} tickets - Lista de tickets
 */
export function renderTickets(tickets) {
  if (!DOM.ticketsList) return;

  // Limpa e renderiza tickets
  DOM.ticketsList.innerHTML = tickets.map(ticketItemTemplate).join("");

  // Adiciona itens vazios
  addEmptyTicketItems(8);
}

/**
 * Adiciona itens vazios à lista
 * @param {number} count - Quantidade de itens
 */
function addEmptyTicketItems(count) {
  const emptyItems = Array(count)
    .fill(null)
    .map(() => emptyTicketTemplate())
    .join("");
  DOM.ticketsList.innerHTML += emptyItems;
}
