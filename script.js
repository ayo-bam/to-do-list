document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    saveTask(taskInput.value);
    taskInput.value = "";
}

function saveTask(task) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    var taskList = document.getElementById("taskList");
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(task) {
        var li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}

function clearList() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    localStorage.removeItem("tasks"); 
}