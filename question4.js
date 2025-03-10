class Task {
    constructor(id, name, description) {
      this.id = id;
      this.name = name;
      this.description = description;
    }
  }
  
  // storage for tasks
  let tasks = [];
  let nextId = 1; // Auto-increment ID for new tasks
  
  
  // creating new tasks
  function addTask(name, description) {
    const task = new Task(nextId++, name, description);
    tasks.push(task);
    console.log(`Task added: ${task.name}`);
  }
  
  // reading all tasks
  function viewAllTasks() {
    if (tasks.length === 0) {
      console.log("No tasks found.");
    } else {
      console.log("Tasks:");
      tasks.forEach((task) => {
        console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
      });
    }
  }
  
  // updating all tasks
  function updateTask(id, newName, newDescription) {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      task.name = newName || task.name; // update name if provided
      task.description = newDescription || task.description; // update description
      console.log(`Task updated: ${task.name}`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }
  
  // delete a task
  function deleteTask(id) {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      const deletedTask = tasks.splice(taskIndex, 1)[0];
      console.log(`Task deleted: ${deletedTask.name}`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }
  
  // 
  
  addTask("Coding", "creating a project");
  addTask("Studying", "studying for the exam");
  viewAllTasks();
  
  updateTask(1, "Coding", "creating a new project");
  viewAllTasks();
  
  deleteTask(1);
  viewAllTasks();