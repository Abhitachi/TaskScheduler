const taskInput = document.getElementById("task");
const priorityInput = document.getElementById("priority");
const deadLineInput = document.getElementById("deadline");
const addTaskbutton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskbutton.addEventListener("click", () => {
  const task = taskInput.value;
  const priority = priorityInput.value;
  const deadLine = deadLineInput.value;

  if (task.trim() === "") {
    alert("Please add the task.");
    return;
  } else if (deadLine === "") {
    alert("Please select an upcoming date for the deadline.");
    return;
  }

  const selectedDate = new Date(deadLine);
  const currentDate = new Date();

  if (selectedDate <= currentDate) {
    alert("Please select an upcoming date for the deadline.");
    return;
  }

  const taskItem = document.createElement("div");
  taskItem.classList.add("task");
  taskItem.innerHTML = `
    <p>${task}</p>
    <p>Priority: ${priority}</p>
    <p>Deadline: ${deadLine}</p>
    <button class="mark-done"> Mark Done</button> 
    `;

  console.log(taskItem);
  taskList.appendChild(taskItem);

  taskInput.value = "";
  priorityInput.value = "top";
  deadLineInput.value = "";

  console.log("hmm");
});

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("mark-done")) {
    const taskItem = event.target.parentElement;
    taskItem.style.backgroundColor = "#f2f2f2";
    event.target.disabled = true;
    taskItem.remove();
  }
});
