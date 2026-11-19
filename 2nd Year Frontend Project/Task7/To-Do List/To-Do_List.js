
let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        text: task,
        completed: false
    });

    input.value = "";
    displayTasks();
}

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(function(task, index) {

        let li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        let span = document.createElement("span");
        span.innerText = task.text;

        span.style.cursor = "pointer";

        span.addEventListener("click", function() {
            tasks[index].completed =
                !tasks[index].completed;

            displayTasks();
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

        deleteBtn.addEventListener("click", function() {
            tasks.splice(index, 1);
            displayTasks();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);

        list.appendChild(li);
    });

    let completed = tasks.filter(
        task => task.completed
    ).length;

    document.getElementById("totalCount").innerText =
        tasks.length;

    document.getElementById("completedCount").innerText =
        completed;

    document.getElementById("pendingCount").innerText =
        tasks.length - completed;
}
