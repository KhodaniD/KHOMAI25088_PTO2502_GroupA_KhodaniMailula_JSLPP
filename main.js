/**
 * @file main.js
 * @description Main entry point for the Kanban app. Initializes the application and sets up global event listeners.
 */

import { initializeTasks } from './tasks.js';
import { openModal, setupModalEventListeners } from './modal.js';

// DOM Elements
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const showSidebarBtn = document.getElementById('show-sidebar-btn');
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const mobileMenuModal = document.getElementById('mobile-menu-modal');
const mobileMenuTrigger = document.getElementById('mobile-menu-trigger'); 
const mainLogo = document.querySelector('.main-logo');

/**
 * Applies a theme to the application.
 * @param {'light' | 'dark'} theme - The theme to apply.
 * @returns {void}
 */
function applyTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const isDark = theme === 'dark';
  themeToggle.checked = isDark;
  mobileThemeToggle.checked = isDark;

  // Swaps the logo source based on the current theme
  if (mainLogo) {
    if (isDark) {
      // Use logo-dark.svg for dark mode
      mainLogo.src = './assets/logo-dark.svg';
    } else {
      // Use logo-light.svg for light mode 
      mainLogo.src = './assets/logo-light.svg';
    }
  }
}
