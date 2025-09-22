/**
 * Utilitários para manipulação do DOM
 */

/**
 * Cache de elementos DOM para evitar múltiplas queries
 */
export const DOM = {
  // Alerts
  alertsCard: null,
  alertsList: null,

  // Quick Access
  quickAccessCard: null,
  quickAccessList: null,

  // Devices
  devicesGrid: null,

  // Tickets
  ticketsList: null,

  // Security
  complianceItems: null,
  securityNumbers: null,

  // Subscription
  subscriptionStatus: null,
  licenseText: null,
  licenseProgress: null,

  // Session
  sessionInfo: null,

  /**
   * Inicializa o cache de elementos
   */
  init() {
    this.alertsCard = document.querySelector(".alerts-card");
    this.alertsList = document.querySelector(".alerts-card .alerts-list");

    this.quickAccessCard = document.querySelector(".quick-access-card");
    this.quickAccessList = document.querySelector(
      ".quick-access-card .alerts-list"
    );

    this.devicesGrid = document.querySelector(".devices-grid");
    this.ticketsList = document.querySelector(".tickets-list");
    this.complianceItems = document.querySelector(".compliance-items");
    this.securityNumbers = document.querySelectorAll(".security-number");

    this.subscriptionStatus = document.querySelector(
      ".subscription-status span:last-child"
    );
    this.licenseText = document.querySelector(".license-text em");
    this.licenseProgress = document.querySelector(".license-progress");

    this.sessionInfo = document.querySelector(".session-info");
  },
};

/**
 * Cria elementos HTML de forma segura
 * @param {string} html - String HTML
 * @returns {Element} Elemento criado
 */
export function createElementFromHTML(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstChild;
}

/**
 * Remove elemento com animação
 * @param {Element} element - Elemento a ser removido
 * @param {number} duration - Duração da animação em ms
 */
export function removeElementWithAnimation(element, duration = 300) {
  element.style.transition = `all ${duration}ms ease`;
  element.style.opacity = "0";
  element.style.transform = "translateX(-20px)";

  setTimeout(() => element.remove(), duration);
}
