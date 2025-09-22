export const DOM = {
  alertsCard: null,
  alertsList: null,

  quickAccessCard: null,
  quickAccessList: null,

  devicesGrid: null,

  ticketsList: null,

  complianceItems: null,
  securityNumbers: null,

  subscriptionStatus: null,
  licenseText: null,
  licenseProgress: null,

  sessionInfo: null,

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

export function createElementFromHTML(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstChild;
}

export function removeElementWithAnimation(element, duration = 300) {
  element.style.transition = `all ${duration}ms ease`;
  element.style.opacity = "0";
  element.style.transform = "translateX(-20px)";

  setTimeout(() => element.remove(), duration);
}
