/**
 * @file storage.js
 * @description Handles all localStorage operations for persisting and retrieving tasks.
 */
const LOCAL_STORAGE_KEY = 'kanban-tasks-jsl';

/**
 * Saves the current tasks array to local storage.
 * @param {Array<object>} tasks - The array of tasks to save.
 */
export function saveTasksToStorage(tasks) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Error saving tasks to local storage:", error);
  }
}