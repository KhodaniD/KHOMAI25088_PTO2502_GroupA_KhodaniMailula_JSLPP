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

/**
 * Creates and returns a task card element.
 * @param {object} task - The task object.
 * @returns {HTMLElement} The task card element.
 */
function createTaskElement(task) {
  const taskCard = document.createElement('div');
  taskCard.className = 'task-card';
  taskCard.dataset.taskId = task.id;
  taskCard.innerHTML = `
    <div class="task-header-container">
      <h3 class="task-title">${task.title}</h3>
      <span class="priority-dot priority-${task.priority || 'low'}"></span>
    </div>
  `;
  taskCard.addEventListener('click', () => openModal(task));
  return taskCard;
}

/**
 * Updates the task count displays for each column.
 */
function updateTaskCountDisplays() {
  const counts = state.reduce((acc, task) => {
    acc[task.status] = (acc[task.status] || 0) + 1;
    return acc;
  }, { todo: 0, doing: 0, done: 0 });

  for (const status in counts) {
    const countElement = document.querySelector(`.column-div[data-status="${status}"] .column-count`);
    if (countElement) {
      countElement.textContent = `(${counts[status]})`;
    }
  }
}

