/**
 * @file modal.js
 * @description Handles all logic for the task creation and editing modal.
 */

import { addNewTask, updateTask, deleteTask } from './tasks.js';

const modalBackdrop = document.getElementById('modal-backdrop');
const deleteModalBackdrop = document.getElementById('delete-modal-backdrop');
const taskForm = document.getElementById('task-form');
const titleInput = document.getElementById('modal-task-title');
const titleFieldGroup = titleInput.closest('.form-group');
const deleteButton = document.getElementById('delete-task-btn');

// New DOM elements for the delete modal
const confirmDeleteBtn = document.getElementById('confirm-delete-btn');
const cancelDeleteBtn = document.getElementById('cancel-delete-btn');

let currentTaskId = null;

/**
 * Toggles the validation message for the task title input.
 * @param {boolean} show - Whether to show or hide the validation message.
 */
function toggleTitleValidation(show) {
  titleFieldGroup.classList.toggle('show-validation', show);
}

/**
 * Populates the task modal with data from a task object.
 * @param {object} [task=null] - The task object to populate the modal with.
 */
function populateModal(task) {
  currentTaskId = task ? task.id : null;
  taskForm.reset();
  toggleTitleValidation(false);

  const modalTitle = document.getElementById('modal-title');
  const descriptionInput = document.getElementById('modal-task-description');
  const statusInput = document.getElementById('modal-task-status');
  const priorityInput = document.getElementById('modal-task-priority');
  const saveButton = document.getElementById('save-task-btn');

  if (task) {
    modalTitle.textContent = 'Edit Task';
    titleInput.value = task.title;
    descriptionInput.value = task.description;
    statusInput.value = task.status;
    priorityInput.value = task.priority ? task.priority.toLowerCase() : 'medium';
    saveButton.textContent = 'Save Changes';
    deleteButton.classList.remove('hidden');
  } else {
    modalTitle.textContent = 'Add New Task';
    saveButton.textContent = 'Create Task';
    deleteButton.classList.add('hidden');
    statusInput.value = 'todo';
    priorityInput.value = 'medium';
  }
}

