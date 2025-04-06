const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// ঠিক করা: JSON.parse এবং tasks অ্যারে
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderTasks();

// Add task event
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim(); // ঠিক করা
    if (taskText === '') return;

    tasks.push({ text: taskText, completed: false }); // ঠিক করা
    taskInput.value = '';
    saveTasks();
    renderTasks(); // ঠিক করা
});

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = task.text;
        taskSpan.addEventListener('click', () => toggleComplete(index));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTask(index));

        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Toggle task completion
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

// Delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}
