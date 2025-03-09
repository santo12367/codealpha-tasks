document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const taskItem = document.createElement("li");
        taskItem.innerHTML = `${taskText} <button class="delete-btn">X</button>`;
        taskList.appendChild(taskItem);

        taskInput.value = "";

        taskItem.querySelector(".delete-btn").addEventListener("click", function () {
            taskItem.remove();
        });
    });

    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTaskBtn.click();
        }
    });
});
