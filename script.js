// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Load tasks from local storage
document.addEventListener('DOMContentLoaded', loadTasks);

// Add task event
addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    // Confirmation prompt for adding task
    if (confirm(`Are you sure you want to add the task: "${taskText}"?`)) {
        
            const li = document.createElement('li');
            li.textContent = taskText;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'btn btn-danger btn-sm';
            deleteBtn.onclick = () => deleteTask(li);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);

            // Save to local storage
            saveTaskToLocalStorage(taskText);
            taskInput.value = '';
        
    }
}

function deleteTask(li) {
    // Confirmation prompt for deleting task
    if (confirm('Are you sure you want to delete this task?')) {
        
            li.remove();
    }
}

function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.onclick = () => deleteTask(li);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
