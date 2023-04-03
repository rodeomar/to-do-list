// Business logic for To Do List

function ToDoList() {
  this.lists = {};
  this.currentId = 0;
}

ToDoList.prototype.addUser = function(user) {
  user.id = this.assignId();
  this.lists[user.id] = user;
};

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

function User(name) {
  this.name = name;
  this.currentId = 0;
  this.tasks = {};
}

User.prototype.addTask = function(task) {
  task.id = this.assignTaskId();
  this.tasks[task.id] = task;
};

User.prototype.assignTaskId = function() {
  this.currentId += 1;
  return this.currentId;
};

function Task(taskName) {
  this.task = taskName;
  this.done = false;
}

// 
let toDoList = new ToDoList();
let raed = new User("Raed");
toDoList.addUser(raed);
let task1 = new Task("wash the car");
// raed.addTask(task1);