/**
 * @file tasks.js
 * @description Handles task state management, API fetching, rendering, and CRUD operations.
 */

import { saveTasksToStorage, loadTasksFromStorage } from './storage.js';
import { openModal } from './modal.js';

const API_URL = 'https://jsl-kanban-api.vercel.app/api/tasks';
let state = [];

const loadingStateElement = document.getElementById('loading-state');
const errorStateElement = document.getElementById('error-state');
const noTasksStateElement = document.getElementById('no-tasks-state');
const kanbanBoardElement = document.getElementById('kanban-board');
const columnDivs = document.querySelectorAll('.column-div');

/**
 * Sets the current view of the Kanban board (loading, error, empty, or content).
 * @param {'loading' | 'error' | 'empty' | 'content'} view - The view to display.
 */
function setBoardView(view) {
  const views = ['loading', 'error', 'empty', 'content'];
  views.forEach(v => {
    const element = document.getElementById(`${v}-state`) || kanbanBoardElement;
    if (element) {
      element.classList.toggle('hidden', view !== v);
    }
  });
}

/**
 * Fetches tasks from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of tasks.
 */
async function fetchTasksFromAPI() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch tasks from API:", error);
    return [];
  }
}

/**
 * Compares two tasks by priority for sorting.
 * @param {object} a - The first task.
 * @param {object} b - The second task.
 * @returns {number} The sort order value.
 */
function compareTasksByPriority(a, b) {
  const priorityOrder = { high: 3, medium: 2, low: 1 };
  return (priorityOrder[b.priority] || 0) - (priorityOrder[a.priority] || 0);
}

