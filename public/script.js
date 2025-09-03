// Todo App JavaScript
class TodoApp {
    constructor() {
        this.tasks = [];
        this.apiBaseUrl = '/api/tasks';
        
        this.initializeElements();
        this.bindEvents();
        this.loadTasks();
    }

    initializeElements() {
        this.taskInput = document.getElementById('taskInput');
        this.addTaskBtn = document.getElementById('addTaskBtn');
        this.tasksList = document.getElementById('tasksList');
        this.emptyState = document.getElementById('emptyState');
        this.totalTasks = document.getElementById('totalTasks');
        this.completedTasks = document.getElementById('completedTasks');
    }

    bindEvents() {
        this.addTaskBtn.addEventListener('click', () => this.addTask());
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTask();
            }
        });
    }

    async loadTasks() {
        try {
            this.showLoading();
            const response = await fetch(this.apiBaseUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            this.tasks = await response.json();
            this.renderTasks();
            this.updateStats();
        } catch (error) {
            console.error('Error loading tasks:', error);
            this.showError('Failed to load tasks. Please refresh the page.');
        }
    }

    async addTask() {
        const title = this.taskInput.value.trim();
        
        if (!title) {
            this.showError('Please enter a task title.');
            return;
        }

        try {
            this.setButtonLoading(this.addTaskBtn, true);
            
            const response = await fetch(this.apiBaseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const newTask = await response.json();
            this.tasks.unshift(newTask);
            this.renderTasks();
            this.updateStats();
            this.taskInput.value = '';
            this.taskInput.focus();
        } catch (error) {
            console.error('Error adding task:', error);
            this.showError('Failed to add task. Please try again.');
        } finally {
            this.setButtonLoading(this.addTaskBtn, false);
        }
    }

    async toggleTask(taskId) {
        const task = this.tasks.find(t => t._id === taskId);
        if (!task) return;

        const newCompletedState = !task.completed;

        try {
            const response = await fetch(`${this.apiBaseUrl}/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ completed: newCompletedState }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const updatedTask = await response.json();
            const taskIndex = this.tasks.findIndex(t => t._id === taskId);
            this.tasks[taskIndex] = updatedTask;
            this.renderTasks();
            this.updateStats();
        } catch (error) {
            console.error('Error updating task:', error);
            this.showError('Failed to update task. Please try again.');
        }
    }

    async deleteTask(taskId) {
        if (!confirm('Are you sure you want to delete this task?')) {
            return;
        }

        try {
            const response = await fetch(`${this.apiBaseUrl}/${taskId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            this.tasks = this.tasks.filter(t => t._id !== taskId);
            this.renderTasks();
            this.updateStats();
        } catch (error) {
            console.error('Error deleting task:', error);
            this.showError('Failed to delete task. Please try again.');
        }
    }

    renderTasks() {
        if (this.tasks.length === 0) {
            this.tasksList.style.display = 'none';
            this.emptyState.style.display = 'block';
            return;
        }

        this.tasksList.style.display = 'block';
        this.emptyState.style.display = 'none';

        this.tasksList.innerHTML = this.tasks.map(task => `
            <div class="task-item" data-task-id="${task._id}">
                <div 
                    class="task-checkbox ${task.completed ? 'checked' : ''}"
                    onclick="todoApp.toggleTask('${task._id}')"
                    role="button"
                    tabindex="0"
                    aria-label="${task.completed ? 'Mark as incomplete' : 'Mark as complete'}"
                ></div>
                <div class="task-content ${task.completed ? 'completed' : ''}">
                    ${this.escapeHtml(task.title)}
                </div>
                <div class="task-actions">
                    <button 
                        class="btn btn-small btn-danger"
                        onclick="todoApp.deleteTask('${task._id}')"
                        aria-label="Delete task"
                    >
                        Delete
                    </button>
                </div>
            </div>
        `).join('');
    }

    updateStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        
        this.totalTasks.textContent = total;
        this.completedTasks.textContent = completed;
    }

    showLoading() {
        this.tasksList.innerHTML = '<div class="loading">Loading tasks...</div>';
        this.emptyState.style.display = 'none';
    }

    showError(message) {
        // Create a simple error notification
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-notification';
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff6b6b;
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        errorDiv.textContent = message;
        
        document.body.appendChild(errorDiv);
        
        // Remove after 5 seconds
        setTimeout(() => {
            errorDiv.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (errorDiv.parentNode) {
                    errorDiv.parentNode.removeChild(errorDiv);
                }
            }, 300);
        }, 5000);
    }

    setButtonLoading(button, isLoading) {
        if (isLoading) {
            button.disabled = true;
            button.textContent = 'Adding...';
            button.style.opacity = '0.7';
        } else {
            button.disabled = false;
            button.textContent = 'Add Task';
            button.style.opacity = '1';
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize the app when the DOM is loaded
let todoApp;
document.addEventListener('DOMContentLoaded', () => {
    todoApp = new TodoApp();
});
