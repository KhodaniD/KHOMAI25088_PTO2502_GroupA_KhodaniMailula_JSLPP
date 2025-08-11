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

/**
 * Handles the form submission for creating or editing a task.
 * @param {Event} event - The form submit event.
 */
function handleFormSubmit(event) {
  event.preventDefault();
  const title = titleInput.value.trim();

  if (!title) {
    toggleTitleValidation(true);
    return;
  }

  const taskData = {
    title,
    description: document.getElementById('modal-task-description').value.trim(),
    status: document.getElementById('modal-task-status').value,
    priority: document.getElementById('modal-task-priority').value,
  };

  if (currentTaskId) {
    updateTask(currentTaskId, taskData);
  } else {
    addNewTask(taskData);
  }

  closeModal();
}

/**
 * Handles the click on the "Delete Task" button in the edit modal.
 */
function handleDeleteClick() {
  if (!currentTaskId) return;
  // This function now simply shows the custom delete modal
  deleteModalBackdrop.classList.remove('hidden');
}

/**
 * Opens the main task modal.
 * @param {object} [task=null] - The task object to be edited. If null, a new task form is shown.
 */
export function openModal(task = null) {
  populateModal(task);
  modalBackdrop.classList.remove('hidden');
}

/**
 * Closes the main task modal.
 */
export function closeModal() {
  modalBackdrop.classList.add('hidden');
}

/**
 * Sets up all event listeners for the modals.
 */
export function setupModalEventListeners() {
  taskForm.addEventListener('submit', handleFormSubmit);
  
  // The event listener for the delete button is now set up once here
  deleteButton.addEventListener('click', handleDeleteClick);

  titleInput.addEventListener('input', () => {
    if (titleInput.value.trim()) {
      toggleTitleValidation(false);
    }
  });

  document.getElementById('close-modal-btn').addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (event) => {
    if (event.target === modalBackdrop) {
      closeModal();
    }
  });

  // Event listeners for the custom delete modal, set up once
  confirmDeleteBtn.addEventListener('click', () => {
    if (currentTaskId) {
      deleteTask(currentTaskId);
      deleteModalBackdrop.classList.add('hidden');
      closeModal();
    }
  });

  cancelDeleteBtn.addEventListener('click', () => {
    deleteModalBackdrop.classList.add('hidden');
  });

  deleteModalBackdrop.addEventListener('click', (event) => {
    if (event.target === deleteModalBackdrop) {
      deleteModalBackdrop.classList.add('hidden');
    }
  });
}
