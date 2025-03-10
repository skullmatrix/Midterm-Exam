class Task {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

// Task management system
class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }

    // Add a new task
    addTask(name, description) {
        const task = new Task(this.nextId++, name, description);
        this.tasks.push(task);
        return task;
    }

    // View all tasks
    viewTasks() {
        return this.tasks;
    }

    // Update a task
    updateTask(id, name, description) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.name = name;
            task.description = description;
            return task;
        } else {
            return null;
        }
    }

    // Delete a task
    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            return this.tasks.splice(index, 1)[0];
        } else {
            return null;
        }
    }
}

// Example usage
const taskManager = new TaskManager();

// Add tasks
taskManager.addTask('Coding', 'Create a new project');
taskManager.addTask('Shopping', 'Buy groceries');  
taskManager.addTask('Studying', 'Studying for the exam');

// View tasks
console.log(taskManager.viewTasks());

// Update a task
taskManager.updateTask(1, 'Updated Task 1', 'Updated Description 1');

// View tasks after update
console.log(taskManager.viewTasks());

// Delete a task
taskManager.deleteTask(2);

// View tasks after deletion
console.log(taskManager.viewTasks());