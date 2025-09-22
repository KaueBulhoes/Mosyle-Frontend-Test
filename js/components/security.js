import { DOM } from "../utils/dom.js";
import { complianceItemTemplate } from "../utils/templates.js";

export function renderSecurity(security) {
  renderCompliance(security.compliance);
  renderInfections(security.infections);
}

function renderCompliance(compliance) {
  if (!DOM.complianceItems) return;

  DOM.complianceItems.innerHTML = compliance
    .map(complianceItemTemplate)
    .join("");
}

function renderInfections(infections) {
  if (!DOM.securityNumbers || DOM.securityNumbers.length < 2) return;

  DOM.securityNumbers[0].textContent = infections.findings;
  DOM.securityNumbers[1].textContent = infections.devices;
}

export function refreshSecurity(button) {
  button.classList.add("loading");
  button.disabled = true;

  setTimeout(() => {
    button.classList.remove("loading");
    button.disabled = false;
    console.log("Security data refreshed");
  }, 1500);
}
