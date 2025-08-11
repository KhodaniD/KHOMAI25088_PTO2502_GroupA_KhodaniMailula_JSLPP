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

