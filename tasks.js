/**
 * @file tasks.js
 * @description Handles task state management, API fetching, rendering, and CRUD operations.
 */

import { saveTasksToStorage, loadTasksFromStorage } from './storage.js';
import { openModal } from './modal.js';

const API_URL = 'https://jsl-kanban-api.vercel.app/';
let state = [];

const loadingOverlay = document.getElementById('loading-overlay');
const errorStateElement = document.getElementById('error-state');
const noTasksStateElement = document.getElementById('no-tasks-state');
const kanbanBoardElement = document.getElementById('kanban-board');
const columnDivs = document.querySelectorAll('.column-div');

/**
 * Sets the current view of the Kanban board.
 * @param {'loading' | 'error' | 'empty' | 'content'} view - The view to display.
 */
function setBoardView(view) {
  // Use a map to handle all possible view states
  const elements = {
    loading: loadingOverlay,
    error: errorStateElement,
    empty: noTasksStateElement,
    content: kanbanBoardElement
  };

  // Toggle the 'hidden' class on each element based on the current view
  for (const key in elements) {
    if (elements[key]) {
      elements[key].classList.toggle('hidden', key !== view);
    }
  }
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
    // Return an empty array to handle the error gracefully
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

/**
 * Renders all tasks to the Kanban board.
 */
export function renderTasks() {
  const tasksByStatus = { todo: [], doing: [], done: [] };
  state.forEach(task => {
    if (tasksByStatus[task.status]) {
      tasksByStatus[task.status].push(task);
    }
  });

  columnDivs.forEach(column => {
    const status = column.dataset.status;
    const container = column.querySelector('.tasks-container');
    if (container) {
      container.innerHTML = '';
      tasksByStatus[status]
        .sort(compareTasksByPriority)
        .forEach(task => container.appendChild(createTaskElement(task)));
    }
  });

  updateTaskCountDisplays();
  
  if (state.length === 0) {
    setBoardView('empty');
  } else {
    setBoardView('content');
  }
}

/**
 * Adds a new task to the state and re-renders.
 * @param {object} taskData - The data for the new task.
 */
export function addNewTask(taskData) {
  const newId = `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const newTask = { ...taskData, id: newId };
  state.push(newTask);
  saveTasksToStorage(state);
  renderTasks();
}

/**
 * Updates an existing task in the state and re-renders.
 * @param {string} id - The ID of the task to update.
 * @param {object} updates - The new data for the task.
 */
export function updateTask(id, updates) {
  const taskIndex = state.findIndex(task => task.id === id);
  if (taskIndex > -1) {
    state[taskIndex] = { ...state[taskIndex], ...updates };
    saveTasksToStorage(state);
    renderTasks();
  }
  setBoardView('content');
}

/**
 * Deletes a task from the state and re-renders.
 * @param {string} id - The ID of the task to delete.
 */
export function deleteTask(id) {
  state = state.filter(task => task.id !== id);
  saveTasksToStorage(state);
  renderTasks();
}

/**
 * Initializes the application by loading tasks from local storage or the API.
 */
export async function initializeTasks() {
  // Show the loading overlay
  setBoardView('loading');
  
  // A small delay to guarantee the loading spinner is visible for a moment
  await new Promise(resolve => setTimeout(resolve, 300));
  
  let tasks = loadTasksFromStorage();

  if (tasks.length === 0) {
    tasks = await fetchTasksFromAPI();
  }
  
  // Update the state and save to local storage
  state = tasks.map(task => ({
    ...task,
    priority: task.priority ? task.priority.toLowerCase() : 'medium'
  }));
  saveTasksToStorage(state);
  
  // Hide the loading overlay and render the tasks
  renderTasks();
}
