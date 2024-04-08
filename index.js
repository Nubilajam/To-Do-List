const form = document.querySelector('form');
const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


function addTask(task) {
    const listTask = document.createElement('li');
    listTask.innerHTML = `<input type="checkbox" /><span>${task}</span>   <button>Delete</button>`;
    taskList.appendChild(listTask);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    task = input.value.trim();
    if (task !== "") {
        addTask(task);
        input.value = "";
    } else {
        console.error("error")
    }


});

taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const listTask = event.target.parentElement;
        taskList.removeChild(listTask);

    }
})