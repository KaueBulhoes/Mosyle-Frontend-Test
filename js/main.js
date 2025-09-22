import { DOM } from "./utils/dom.js";
import { renderAlerts, deleteAlert } from "./components/alerts.js";
import { renderDevices, renderSubscription } from "./components/devices.js";
import { renderQuickAccess } from "./components/quickAccess.js";
import { renderSecurity, refreshSecurity } from "./components/security.js";
import { renderTickets } from "./components/tickets.js";
import { renderSessionInfo } from "./components/session.js";

function initDashboard() {
  DOM.init();

  if (
    typeof dashboardData === "undefined" ||
    typeof deviceTypes === "undefined"
  ) {
    console.error(
      "Dados do dashboard não carregados. Verifique se api-data.js foi incluído."
    );
    return;
  }

  renderAlerts(dashboardData.alerts);
  renderQuickAccess(dashboardData.quickAccess);
  renderDevices(deviceTypes);
  renderTickets(dashboardData.tickets);
  renderSecurity(dashboardData.security);
  renderSubscription(dashboardData.subscription);
  renderSessionInfo(dashboardData.session);

  console.log("✅ Mosyle Dashboard initialized successfully");
}

function setupEventListeners() {
  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-action]");
    if (!target) return;

    const action = target.dataset.action;

    switch (action) {
      case "delete-alert":
        deleteAlert(target);
        break;
      case "refresh-security":
        refreshSecurity(target);
        break;
      case "settings":
        console.log("Settings clicked");
        break;
      case "logout":
        console.log("Logout clicked");
        break;
      case "go-support":
        console.log("Go to Support clicked");
        break;
    }
  });

  document.querySelectorAll("[data-nav]").forEach((item) => {
    item.addEventListener("click", () => {
      document
        .querySelectorAll("[data-nav]")
        .forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      console.log(`Navegando para: ${item.dataset.nav}`);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initDashboard();
  setupEventListeners();
});
