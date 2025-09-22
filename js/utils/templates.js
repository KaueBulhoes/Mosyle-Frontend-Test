/**
 * Templates HTML reutilizáveis
 */

/**
 * Template para item de alerta
 * @param {Object} alert - Dados do alerta
 * @returns {string} HTML do alerta
 */
export function alertItemTemplate(alert) {
  return `
    <div class="alert-item">
      <div class="alert-icon">${alert.icon}</div>
      <span class="alert-text">${alert.text}</span>
      ${
        alert.count !== null
          ? `<span class="alert-count">${alert.count}</span>`
          : ""
      }
      <button class="delete-btn" data-action="delete-alert"></button>
    </div>
  `;
}

/**
 * Template para item vazio (placeholder)
 * @returns {string} HTML do item vazio
 */
export function emptyAlertTemplate() {
  return '<div class="alert-item"></div>';
}

/**
 * Template para item de acesso rápido
 * @param {Object} item - Dados do item
 * @returns {string} HTML do item
 */
export function quickAccessTemplate(item) {
  return `
    <div class="alert-item">
      <div class="alert-icon">${item.icon}</div>
      <span class="alert-text">${item.text}</span>
    </div>
  `;
}

/**
 * Template para item vazio de acesso rápido
 * @returns {string} HTML do item vazio
 */
export function emptyQuickAccessTemplate() {
  return '<div class="alert-item"><span class="alert-text"></span></div>';
}

/**
 * Template para card de dispositivo
 * @param {Object} device - Dados do dispositivo
 * @returns {string} HTML do card
 */
export function deviceCardTemplate(device) {
  const iconClass = getDeviceIconClass(device.icon);

  return `
    <div class="device-card">
      <div class="device-icon-placeholder ${iconClass}"></div>
      <div class="device-number">${device.count}</div>
      <div class="device-label">${device.shortName}</div>
    </div>
  `;
}

/**
 * Mapeia ícone para classe CSS
 * @param {string} icon - Emoji do ícone
 * @returns {string} Classe CSS
 */
function getDeviceIconClass(icon) {
  const iconMap = {
    "📱": "device-icon-ios",
    "💻": "device-icon-macos",
    "📺": "device-icon-tvos",
    "🥽": "device-icon-visionos",
  };
  return iconMap[icon] || "";
}

/**
 * Template para item de ticket
 * @param {Object} ticket - Dados do ticket
 * @returns {string} HTML do ticket
 */
export function ticketItemTemplate(ticket) {
  return `
    <div class="ticket-item">
      <div class="ticket-info">
        <div class="ticket-status-line">
          <span class="ticket-status">${ticket.status}</span>
          <span class="ticket-id">${ticket.id} - ${ticket.description}</span>
        </div>
      </div>
      <div class="ticket-date">${ticket.date}</div>
    </div>
  `;
}

/**
 * Template para item vazio de ticket
 * @returns {string} HTML do item vazio
 */
export function emptyTicketTemplate() {
  return `
    <div class="ticket-item">
      <div class="ticket-info">
        <div class="ticket-status-line"></div>
      </div>
    </div>
  `;
}

/**
 * Template para item de compliance
 * @param {Object} item - Dados de compliance
 * @returns {string} HTML do item
 */
export function complianceItemTemplate(item) {
  const iconClass =
    item.type.toLowerCase() === "macos"
      ? "device-icon-macos"
      : "device-icon-ios";

  return `
    <div class="compliance-item ${item.status}">
      <div class="${iconClass}"></div>
      <div>${item.percentage}<span>%</span></div>
    </div>
  `;
}
