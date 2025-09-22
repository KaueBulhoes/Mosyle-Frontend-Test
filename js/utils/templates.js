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

export function emptyAlertTemplate() {
  return '<div class="alert-item"></div>';
}

export function quickAccessTemplate(item) {
  return `
    <div class="alert-item">
      <div class="alert-icon">${item.icon}</div>
      <span class="alert-text">${item.text}</span>
    </div>
  `;
}

export function emptyQuickAccessTemplate() {
  return '<div class="alert-item"><span class="alert-text"></span></div>';
}

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

function getDeviceIconClass(icon) {
  const iconMap = {
    "📱": "device-icon-ios",
    "💻": "device-icon-macos",
    "📺": "device-icon-tvos",
    "🥽": "device-icon-visionos",
  };
  return iconMap[icon] || "";
}

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

export function emptyTicketTemplate() {
  return `
    <div class="ticket-item">
      <div class="ticket-info">
        <div class="ticket-status-line"></div>
      </div>
    </div>
  `;
}

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
