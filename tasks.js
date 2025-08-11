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

