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

/**
 * Loads the saved theme from local storage or defaults to the user's system preference.
 * @returns {void}
 */
function loadInitialTheme() {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));
}

/**
 * Toggles the visibility of the sidebar on desktop.
 * @returns {void}
 */
function toggleSidebar() {
  sidebar.classList.toggle('hidden');
  mainContent.classList.toggle('sidebar-hidden');
}

/**
 * Toggles the visibility of the mobile menu.
 * @returns {void}
 */
function toggleMobileMenu() {
  mobileMenuModal.classList.toggle('hidden');
}

/**
 * Sets up all the global event listeners for the application.
 * @returns {void}
 */
function setupGlobalEventListeners() {
  // Sidebar toggling
  document.getElementById('hide-sidebar-btn').addEventListener('click', toggleSidebar);
  showSidebarBtn.addEventListener('click', toggleSidebar);

  // Theme toggling
  themeToggle.addEventListener('change', () => applyTheme(themeToggle.checked ? 'dark' : 'light'));
  mobileThemeToggle.addEventListener('change', () => applyTheme(mobileThemeToggle.checked ? 'dark' : 'light'));

  // Mobile menu
  mobileMenuTrigger.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents the document listener from firing immediately
    toggleMobileMenu();
  });
  document.getElementById('close-mobile-menu-btn').addEventListener('click', toggleMobileMenu);

  // "Add New Task" buttons
  document.getElementById('add-new-task-btn').addEventListener('click', () => openModal());
  document.getElementById('add-new-task-from-empty-btn').addEventListener('click', () => openModal());

  // Close mobile menu when clicking outside of it
  document.addEventListener('click', (event) => {
    if (!mobileMenuModal.classList.contains('hidden') && 
        !mobileMenuModal.contains(event.target) &&
        !mobileMenuTrigger.contains(event.target)) {
      toggleMobileMenu();
    }
  });
}

