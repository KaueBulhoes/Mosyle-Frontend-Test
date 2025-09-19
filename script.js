/**
 * Mosyle Dashboard JavaScript
 * Handles interactivity for MDM alerts deletion and security refresh
 */

/**
 * Deletes an alert item with smooth animation
 * @param {HTMLButtonElement} btn - The delete button that was clicked
 */
function deleteAlert(btn) {
  const alertItem = btn.closest(".alert-item");

  if (!alertItem) {
    console.error("Alert item not found");
    return;
  }

  // Add smooth transition
  alertItem.style.transition = "all 0.3s ease";
  alertItem.style.opacity = "0";
  alertItem.style.transform = "translateX(-20px)";

  // Remove the element after animation completes
  setTimeout(() => {
    alertItem.remove();
  }, 300);
}

/**
 * Refreshes the security section data
 * Shows loading state and success notification
 */
function refreshSecurity() {
  const refreshBtn = document.querySelector(".refresh-security-btn");

  if (!refreshBtn) {
    console.error("Refresh button not found");
    return;
  }

  const originalHTML = refreshBtn.innerHTML;

  // Set loading state
  refreshBtn.innerHTML = "🔄 Refreshing...";
  refreshBtn.disabled = true;
  refreshBtn.style.opacity = "0.7";

  // Simulate refresh process
  setTimeout(() => {
    // Restore button state
    refreshBtn.innerHTML = originalHTML;
    refreshBtn.disabled = false;
    refreshBtn.style.opacity = "1";

    // Show success notification
    showNotification("Security data refreshed!", "success");
  }, 1500);
}

/**
 * Shows a temporary notification message
 * @param {string} message - The message to display
 * @param {string} type - The type of notification ('success', 'error', 'info')
 */
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.className = `notification notification-${type}`;

  // Notification styles
  notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 12px 20px;
        border-radius: 6px;
        font-size: 13px;
        font-weight: 500;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideInRight 0.3s ease;
    `;

  document.body.appendChild(notification);

  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, 3000);
}

/**
 * Gets the appropriate color for notification type
 * @param {string} type - The notification type
 * @returns {string} - The color value
 */
function getNotificationColor(type) {
  const colors = {
    success: "#28a745",
    error: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
  };
  return colors[type] || colors.info;
}

/**
 * Initialize the dashboard when DOM is loaded
 */
document.addEventListener("DOMContentLoaded", function () {
  console.log("Mosyle Dashboard initialized");

  // Add CSS animations for notifications
  if (!document.querySelector("#notification-animations")) {
    const style = document.createElement("style");
    style.id = "notification-animations";
    style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
    document.head.appendChild(style);
  }

  // Add hover effects for interactive elements
  addHoverEffects();

  // Initialize tooltips or other interactive features if needed
  // initializeTooltips();
});

/**
 * Adds enhanced hover effects to interactive elements
 */
function addHoverEffects() {
  // Enhanced hover effect for quick access buttons
  const quickAccessButtons = document.querySelectorAll(".quick-access-btn");
  quickAccessButtons.forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
      this.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    });

    btn.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "none";
    });
  });
}

/**
 * Utility function to debounce function calls
 * @param {Function} func - The function to debounce
 * @param {number} wait - The delay in milliseconds
 * @returns {Function} - The debounced function
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Handle window resize for responsive behavior
 */
window.addEventListener(
  "resize",
  debounce(function () {
    // Add any responsive JavaScript logic here if needed
    console.log("Window resized");
  }, 250)
);
