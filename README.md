# Kanban Board Project: Dynamic Task Management App

---

## Project Title

**Kanban Board: Portfolio Piece**

---

## 💡 Project Overview

This project is a fully functional, responsive Kanban board web application designed to help users visualize and manage their workflow. It features a responsive layout that gracefully adapts to various screen sizes, organizing tasks into "TODO," "DOING," and "DONE" columns. Building upon a static visual base, this version introduces a robust **JavaScript-driven system for dynamic task display and interactive management**. Users can **add, view, modify, and delete tasks** via a dedicated modal-based interface. All task data **persists in local storage**, ensuring your progress is saved even if you close the browser. This project showcases advanced DOM manipulation, event handling, and a clean, modular JavaScript architecture for a professional and scalable implementation.

---

## 🚀 Live Demo & Presentation

* **Live Demo:** https://khodanimailulajslpp.netlify.app/
* **Presentation:** https://www.veed.io/view/d016bce6-f150-4c6a-abe7-e6fe835d4922?panel=share

---

## 🌟 Key Features
### Core Functionality

* **Persistent Data:** All tasks are automatically saved to and loaded from the browser's **Local Storage**, ensuring data is never lost.
* **Dynamic Task Rendering:** Tasks are dynamically generated from JavaScript data, not hard-coded HTML, and are automatically displayed in their correct columns with real-time updates to task counts.
* **Interactive Modal-Based Task Management:**
  * **"Add New Task" Modal:** A dedicated button opens a modal for creating new tasks with a title, description, and status.
  * **"Edit Task" Modal:** Clicking any task card opens a modal pre-filled with the task’s details for easy modification.
  * **Delete Task:** An option to delete tasks is available in the edit modal, with a confirmation prompt.
  * **Modal Backdrop Effect:** A semi-transparent backdrop focuses user attention on the modal content.
* **Task Priority:** Each task card includes a priority dot, visually indicating the importance of a task at a glance.
* **Loading State:** A visible loading spinner is now displayed during app initialization, providing immediate feedback to the user while data is being fetched.

### User Interface & Navigation

* **Fully Responsive Design:** The layout now adapts flawlessly to all screen sizes, from desktop to mobile, with the sidebar and columns adjusting responsively.
* **Light & Dark Mode:** The application features an elegant light and dark theme that can be toggled by the user, powered by **CSS Variables** for easy color management.
* **Desktop Sidebar:** A persistent navigation sidebar on larger screens for board selection.
* **Mobile-Optimized Header:** A compact header designed for mobile devices. Tapping the header toggles the visibility of the mobile menu modal, providing a clean navigation experience.
* **Custom Form Validation:** Implemented for key input fields to provide immediate user feedback and guide the user to fill out required fields.
* **Clear Close Button:** A prominent red 'X' button is correctly positioned in the top-right corner of modals for easy closing.

## 🛠️ Technologies Used

* **HTML5:** Provides the structural backbone with semantic elements and placeholders for dynamic content.
* **CSS3:** Handles all styling and comprehensive responsive design, utilizing **CSS Variables** for themes, **Flexbox** for flexible layouts, and **CSS Grid** for arranging the main Kanban columns.
* **JavaScript (ES6+):** Powers all dynamic behavior with a **modular architecture**, advanced **DOM manipulation**, comprehensive **event handling**, and the **Web Storage API**.
  * **Array Manipulation:** Fundamental for efficiently storing, adding, updating, and filtering task objects in memory.
  * **JSDoc Comments:** Every major function and module is documented with JSDoc comments, ensuring self-documented and easily understandable code.
* **Google Fonts:** Uses 'Plus Jakarta Sans' for consistent and modern typography.

## 📋 Interaction Instructions

This project provides interactive task management directly via the user interface:

### Adding a New Task
1. Click the **"+ Add New Task"** button in the header.
2. Fill in the required title and optional description, then select a status.
3. Click **"Create Task"** to add it to the board.

### Editing an Existing Task

1. Click on any task card to open the "Edit Task" modal.
2. Modify the title, description, or status as needed.
3. Click **"Save Changes"** to update the task on the board.

### Deleting a Task

1. Open the "Edit Task" modal by clicking on a task card.
2. Click the **"Delete Task"** button inside the modal and confirm.

### Closing Modals

* Click the **'X' icon** in the top-right corner to close any modal without saving.

## 💻 Setup Instructions

To get this project running locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/KhodaniD/KHOMAI25088_PTO2502_GroupA_KhodaniMailula_JSLPP
   ```

2. **Navigate to the project directory:**

   ```bash
   cd KHOMAI25088_PTO2502_GroupA_KhodaniMailula_JSLPP # Replace with your actual project folder name if different
   ```

3. **Open the file:**
   Locate and double-click `index.html` in the root directory to open the application in your browser.

## 🖥️ Working Usage Examples

### Desktop View

* Open `index.html` in a desktop browser. The **sidebar** and Kanban columns will be fully visible.
* Click **"+ Add New Task"** to create a new task.
* Click on any existing task card to **edit or delete** it.
* Use the **theme toggle** in the sidebar to switch between light and dark mode.
* Resize your browser window to observe how the columns and modal responsively adjust their layout.

### Mobile View
* Open `index.html` on a mobile device or use your browser's developer tools for mobile emulation.
* The desktop sidebar will be hidden. Tap the **Kanban logo in the header** to toggle the mobile menu.
* The Kanban columns will stack vertically, making them easily scrollable.
* The modals for adding and editing tasks are fully responsive and touch-friendly.

This Kanban board now serves as a robust example of dynamic UI rendering, interactive task management (Create, Read, Update, Delete), and responsive design, providing a complete and intuitive user experience.
