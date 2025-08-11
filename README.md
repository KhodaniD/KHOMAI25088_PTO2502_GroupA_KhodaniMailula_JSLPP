# Kanban Board Project: Dynamic Task Management App

---

## Project Title

**Kanban Board: Portfolio Piece**

---

## Project Overview

This is a fully functional, responsive Kanban board web application designed to help users efficiently manage their workflow. The application dynamically organizes tasks into "TODO," "DOING," and "DONE" columns, providing a seamless and intuitive user experience. It's a complete, professional-grade portfolio piece that showcases a range of modern web development skills.

---

## 🚀 Live Demo & Presentation

* **Live Demo:** https://khodanimailulajslpp.netlify.app/
* **Presentation:** [Add your presentation link here]

---


## Key Features

### Core Functionality
* **Fully Responsive Design:** Adapts seamlessly to all screen sizes, from desktop to mobile, ensuring a great user experience on any device.
* **Persistent Data:** All tasks are saved to and loaded from the browser's **Local Storage**, ensuring your progress is always saved, even if you close the application.
* **Dynamic Task Rendering:** Tasks are generated and managed dynamically using JavaScript, not hard-coded HTML. This ensures a clean, maintainable, and scalable codebase.
* **Task Priority:** A key feature for visual organization. Each task card includes a priority dot, making it easy to quickly identify the importance of a task at a glance.


### User Interface & Navigation
* **Themed Styling:** The application features a professional light and **dark mode theme**, which can be easily toggled by the user. This functionality is powered by **CSS Variables**, which allows for robust and maintainable styling and makes it simple to customize the color palette.
* **Desktop Sidebar:** On larger screens, a dedicated sidebar provides clear navigation and theme-toggling options.
* **Mobile Menu Modal:** For smaller screens, a compact, header-based menu provides a clean navigation experience, overlaying the main content to avoid clutter.
* **Custom Form Validation:** Provides immediate, user-friendly feedback for required fields, guiding users to complete forms correctly.

---

## Technologies Used

* **HTML5:** Provides the semantic and structural foundation of the application.
* **CSS3:** Manages all styling, including a comprehensive responsive design. It utilizes **CSS Variables** for streamlined theme management and **Flexbox** for flexible, dynamic layouts.
* **JavaScript (ES6+):** Powers all dynamic behavior and logic. The codebase follows a **modular architecture**, with files separated by responsibility (`main.js`, `tasks.js`, `modal.js`, `storage.js`) for better organization and maintainability. It also features advanced **DOM manipulation**, comprehensive **event handling**, and the use of the **Web Storage API** for data persistence.
* **Google Fonts:** Uses 'Plus Jakarta Sans' for a consistent, modern, and readable typography.

---

## Setup Instructions

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone: https://github.com/KhodaniD/KHOMAI25088_PTO2502_GroupA_KhodaniMailula_JSLPP
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd KHOMAI25088_PTO2502_GroupA_KhodaniMailula_JSLPP # Replace with your actual project folder name if different
    ```

3.  **Open `index.html`:**
    Locate the `index.html` file in the project's root directory. Double-click it or drag it into your web browser to open the application.


---

## Working Usage Examples

### Desktop View

* Open `index.html` in any modern desktop browser. The **sidebar** and all Kanban columns will be fully visible.
* Click **"+ Add New Task"** to create a new task.
* Click on any existing task card to **edit or delete** it.
* Use the **theme toggle** in the sidebar to switch between light and dark mode.

### Mobile View

* Open `index.html` on a mobile device or use your browser's developer tools to simulate a mobile viewport.
* Tap the **Kanban logo in the header** to toggle the mobile menu.
* The menu will appear as a modal, and you can use the red 'X' to close it.
* The Kanban columns will automatically stack vertically for easy scrolling.
* The modals for adding and editing tasks are fully responsive and touch-friendly.

---

## Interaction Instructions

This project provides interactive task management directly via the user interface:

### Adding a New Task
1.  Click the **"+ Add New Task"** button located in the top right of the header.
2.  A modal will appear. Enter the task's title (required) and description in the provided input fields.
3.  Select the desired status ("todo", "doing", or "done") from the dropdown.
4.  Click the **"Create Task"** button. If the title is empty, a validation message will appear. Otherwise, the new task will instantly appear on the Kanban board in the chosen column.

### Editing an Existing Task
1.  Click on any task card displayed on the Kanban board.
2.  An "Edit Task" modal will open, pre-filled with the task's current title, description, and status.
3.  Modify any of the details as needed.
4.  Change the task's status using the dropdown if you wish to move it to another column.
5.  Click the **"Save Changes"** button. If the title is empty, a validation message will appear. Otherwise, the task will update on the board, moving to a new column if its status was changed.

### Deleting a Task
1.  Click on the task card you wish to delete to open the "Edit Task" modal.
2.  Inside the modal, click the **"Delete Task"** button.
3.  The task will be immediately removed from the Kanban board after a confirmation prompt.

### Closing the Modal
* To close any open modal without saving changes, click the **'X' icon** in the top right corner of the modal.

This Kanban board now serves as a robust example of dynamic UI rendering, interactive task management (Create, Read, Update, Delete), and responsive design, providing a complete and intuitive user experience.

