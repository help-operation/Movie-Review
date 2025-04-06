const taskInput = document.getElementById('task-input')
const addBtn = document.getElementById('add-task-btn')
const taskList = document.getElementById('task-list')


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderTasks();

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    tasks.push({text: taskText, completed: false});
    taskInput.value = '';
    saveTasks();
    renderTasks();
});

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : "";

        const  taskSpan  = document.createElement('span');
        taskSpan.textContent = task.text;
        taskSpan.addEventListener('click', () => deleteTask(index));

        const deleteBtn = document.createElement ('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTask(index));

        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    })
}

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
