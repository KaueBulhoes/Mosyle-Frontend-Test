function deleteAlert(btn) {
  const alertItem = btn.closest(".alert-item");
  if (!alertItem) return;

  alertItem.style.transition = "all 0.3s ease";
  alertItem.style.opacity = "0";
  alertItem.style.transform = "translateX(-20px)";

  setTimeout(() => {
    alertItem.remove();
  }, 300);
}

function refreshSecurity(btn) {
  btn.classList.add("loading");
  btn.disabled = true;

  setTimeout(() => {
    btn.classList.remove("loading");
    btn.disabled = false;

    console.log("Security data refreshed");
  }, 1500);
}

function renderDeviceList(container) {
  const deviceList = container.querySelector(".device-list");
  if (!deviceList) return;

  deviceList.innerHTML = "";

  deviceTypes.forEach((device) => {
    const listItem = document.createElement("li");
    listItem.className = "device-item";
    listItem.setAttribute("data-device", device.name);
    listItem.textContent = device.name;
    deviceList.appendChild(listItem);
  });
}

function renderAlerts() {
  const alertsCard = document.querySelector(".alerts-card");
  const alertsList = alertsCard.querySelector(".alerts-list");
  if (!alertsList) return;

  renderDeviceList(alertsCard);

  alertsList.innerHTML = "";

  dashboardData.alerts.forEach((alert) => {
    const alertItem = document.createElement("div");
    alertItem.className = "alert-item";

    alertItem.innerHTML = `
      <div class="alert-icon">${alert.icon}</div>
      <span class="alert-text">${alert.text}</span>
      ${
        alert.count !== null
          ? `<span class="alert-count">${alert.count}</span>`
          : ""
      }
      <button class="delete-btn" onclick="deleteAlert(this)"></button>
    `;

    alertsList.appendChild(alertItem);
  });

  for (let i = 0; i < 2; i++) {
    const emptyItem = document.createElement("div");
    emptyItem.className = "alert-item";
    alertsList.appendChild(emptyItem);
  }
}

function renderQuickAccess() {
  const quickAccessCard = document.querySelector(".quick-access-card");
  const quickAccessList = quickAccessCard.querySelector(".alerts-list");
  if (!quickAccessList) return;

  renderDeviceList(quickAccessCard);

  quickAccessList.innerHTML = "";

  dashboardData.quickAccess.forEach((item) => {
    const accessItem = document.createElement("div");
    accessItem.className = "alert-item";

    accessItem.innerHTML = `
      <div class="alert-icon">${item.icon}</div>
      <span class="alert-text">${item.text}</span>
    `;

    quickAccessList.appendChild(accessItem);
  });

  for (let i = 0; i < 8; i++) {
    const emptyItem = document.createElement("div");
    emptyItem.className = "alert-item";
    emptyItem.innerHTML = '<span class="alert-text"></span>';
    quickAccessList.appendChild(emptyItem);
  }
}

function renderDevices() {
  const devicesGrid = document.querySelector(".devices-grid");
  if (!devicesGrid) return;

  devicesGrid.innerHTML = "";

  deviceTypes.forEach((device) => {
    const deviceCard = document.createElement("div");
    deviceCard.className = "device-card";

    const iconClass =
      device.icon === "📱"
        ? "device-icon-ios"
        : device.icon === "💻"
        ? "device-icon-macos"
        : device.icon === "📺"
        ? "device-icon-tvos"
        : "device-icon-visionos";

    deviceCard.innerHTML = `
      <div class="device-icon-placeholder ${iconClass}"></div>
      <div class="device-number">${device.count}</div>
      <div class="device-label">${device.shortName}</div>
    `;

    devicesGrid.appendChild(deviceCard);
  });
}

function renderTickets() {
  const ticketsList = document.querySelector(".tickets-list");
  if (!ticketsList) return;

  ticketsList.innerHTML = "";

  dashboardData.tickets.forEach((ticket) => {
    const ticketItem = document.createElement("div");
    ticketItem.className = "ticket-item";

    ticketItem.innerHTML = `
      <div class="ticket-info">
        <div class="ticket-status-line">
          <span class="ticket-status">${ticket.status}</span>
          <span class="ticket-id">${ticket.id} - ${ticket.description}</span>
        </div>
      </div>
      <div class="ticket-date">${ticket.date}</div>
    `;

    ticketsList.appendChild(ticketItem);
  });

  for (let i = 0; i < 8; i++) {
    const emptyItem = document.createElement("div");
    emptyItem.className = "ticket-item";
    emptyItem.innerHTML = `
      <div class="ticket-info">
        <div class="ticket-status-line"></div>
      </div>
    `;
    ticketsList.appendChild(emptyItem);
  }
}

function renderSecurity() {
  const complianceItems = document.querySelector(".compliance-items");
  if (complianceItems) {
    complianceItems.innerHTML = "";

    dashboardData.security.compliance.forEach((item) => {
      const complianceItem = document.createElement("div");
      complianceItem.className = `compliance-item ${item.status}`;

      const iconClass =
        item.type.toLowerCase() === "macos"
          ? "device-icon-macos"
          : "device-icon-ios";

      complianceItem.innerHTML = `
        <div class="${iconClass}"></div>
        <div>${item.percentage}<span>%</span></div>
      `;

      complianceItems.appendChild(complianceItem);
    });
  }

  const securityNumbers = document.querySelectorAll(".security-number");
  if (securityNumbers.length >= 2) {
    securityNumbers[0].textContent = dashboardData.security.infections.findings;
    securityNumbers[1].textContent = dashboardData.security.infections.devices;
  }
}

function renderSubscription() {
  const subscriptionStatus = document.querySelector(
    ".subscription-status span:last-child"
  );
  if (subscriptionStatus) {
    subscriptionStatus.textContent = `${dashboardData.subscription.plan} subscription until ${dashboardData.subscription.expirationDate} (${dashboardData.subscription.daysLeft} days left)`;
  }

  const licenseText = document.querySelector(".license-text em");
  if (licenseText) {
    licenseText.textContent = `${dashboardData.subscription.licensesUsed} licenses used of ${dashboardData.subscription.licensesTotal} available`;
  }

  const licenseProgress = document.querySelector(".license-progress");
  if (licenseProgress) {
    const percentage =
      (dashboardData.subscription.licensesUsed /
        dashboardData.subscription.licensesTotal) *
      5;
    licenseProgress.style.width = `${percentage}%`;
  }
}

function renderSessionInfo() {
  const sessionInfo = document.querySelector(".session-info");
  if (sessionInfo && dashboardData.session) {
    sessionInfo.textContent = `Session expires in: ${dashboardData.session.expiresIn} | ${dashboardData.session.userName}`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderAlerts();
  renderQuickAccess();
  renderDevices();
  renderTickets();
  renderSecurity();
  renderSubscription();
  renderSessionInfo();

  console.log("Mosyle Dashboard initialized with dynamic data");
});
