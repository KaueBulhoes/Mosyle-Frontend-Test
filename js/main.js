/**
 * MOSYLE DASHBOARD - Main Entry Point
 * Orquestrador principal da aplicação
 */

import { DOM } from "./utils/dom.js";
import { renderAlerts, deleteAlert } from "./components/alerts.js";
import { renderDevices, renderSubscription } from "./components/devices.js";
import { renderQuickAccess } from "./components/quickAccess.js";
import { renderSecurity, refreshSecurity } from "./components/security.js";
import { renderTickets } from "./components/tickets.js";
import { renderSessionInfo } from "./components/session.js";

/**
 * Expõe funções globalmente para uso com onclick
 * (necessário até migrar para event listeners)
 */
window.deleteAlert = deleteAlert;
window.refreshSecurity = refreshSecurity;

/**
 * Inicializa o dashboard
 */
function initDashboard() {
  // Inicializa cache do DOM
  DOM.init();

  // Verifica se os dados estão disponíveis
  if (
    typeof dashboardData === "undefined" ||
    typeof deviceTypes === "undefined"
  ) {
    console.error(
      "Dados do dashboard não carregados. Verifique se api-data.js foi incluído."
    );
    return;
  }

  // Renderiza todos os componentes
  renderAlerts(dashboardData.alerts);
  renderQuickAccess(dashboardData.quickAccess);
  renderDevices(deviceTypes);
  renderTickets(dashboardData.tickets);
  renderSecurity(dashboardData.security);
  renderSubscription(dashboardData.subscription);
  renderSessionInfo(dashboardData.session);

  console.log("✅ Mosyle Dashboard initialized successfully");
}

/**
 * Event Listeners (opcional - pode substituir onclick)
 */
function setupEventListeners() {
  // Delegação de eventos para botões de delete
  document.addEventListener("click", (e) => {
    if (e.target.closest('[data-action="delete-alert"]')) {
      deleteAlert(e.target.closest('[data-action="delete-alert"]'));
    }
  });
}

/**
 * Inicializa quando DOM estiver pronto
 */
document.addEventListener("DOMContentLoaded", () => {
  initDashboard();
  setupEventListeners();
});
