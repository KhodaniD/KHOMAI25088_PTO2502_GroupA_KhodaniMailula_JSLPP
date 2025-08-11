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

/**
 * Loads tasks from local storage.
 * @returns {Array<object>} The array of tasks, or an empty array if none are found or an error occurs.
 */
export function loadTasksFromStorage() {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!data) return [];
  try {
    const tasks = JSON.parse(data);
    return Array.isArray(tasks) ? tasks : [];
  } catch (error) {
    console.error("Error parsing tasks from local storage:", error);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    return [];
  }
}
