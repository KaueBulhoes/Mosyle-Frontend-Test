import { DOM } from "../utils/dom.js";
import { ticketItemTemplate, emptyTicketTemplate } from "../utils/templates.js";

export function renderTickets(tickets) {
  if (!DOM.ticketsList) return;

  DOM.ticketsList.innerHTML = tickets.map(ticketItemTemplate).join("");

  addEmptyTicketItems(8);
}

function addEmptyTicketItems(count) {
  const emptyItems = Array(count)
    .fill(null)
    .map(() => emptyTicketTemplate())
    .join("");
  DOM.ticketsList.innerHTML += emptyItems;
}
