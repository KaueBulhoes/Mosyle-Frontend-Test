/**
 * Componente de Segurança
 */

import { DOM } from "../utils/dom.js";
import { complianceItemTemplate } from "../utils/templates.js";

/**
 * Renderiza dados de segurança
 * @param {Object} security - Dados de segurança
 */
export function renderSecurity(security) {
  renderCompliance(security.compliance);
  renderInfections(security.infections);
}

/**
 * Renderiza compliance
 * @param {Array} compliance - Dados de compliance
 */
function renderCompliance(compliance) {
  if (!DOM.complianceItems) return;

  DOM.complianceItems.innerHTML = compliance
    .map(complianceItemTemplate)
    .join("");
}

/**
 * Renderiza infecções
 * @param {Object} infections - Dados de infecções
 */
function renderInfections(infections) {
  if (!DOM.securityNumbers || DOM.securityNumbers.length < 2) return;

  DOM.securityNumbers[0].textContent = infections.findings;
  DOM.securityNumbers[1].textContent = infections.devices;
}

/**
 * Atualiza dados de segurança (simula refresh)
 * @param {HTMLElement} button - Botão de refresh
 */
export function refreshSecurity(button) {
  button.classList.add("loading");
  button.disabled = true;

  // Simula chamada à API
  setTimeout(() => {
    button.classList.remove("loading");
    button.disabled = false;
    console.log("Security data refreshed");
  }, 1500);
}
