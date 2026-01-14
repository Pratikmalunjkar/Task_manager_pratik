// Get elements 
const addBtn = document.getElementById("addBtn");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task when button clicked
addBtn.onclick = addTask;

// Enable / Disable Add button
input.oninput = function () {
  addBtn.disabled = input.value.trim() === "";
};

function addTask() {
  if (input.value.trim() === "")
  {
     return;
  }

  // Create list item
  const li = document.createElement("li");
  li.innerText = input.value;

  // Done button
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  doneBtn.onclick = function () {
    li.style.textDecoration = "line-through";
    updateCounts();
  };

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = function () {
    li.remove();
    updateCounts();
  };

  // Add buttons to task
  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input
  input.value = "";
  addBtn.disabled = true;

  updateCounts();
}

// Update total & completed count
function updateCounts() {
  const tasks = taskList.children;
  let completed = 0;

  for (let task of tasks) {
    if (task.style.textDecoration === "line-through") {
      completed ++;
    }
  }

  document.getElementById("totalCount").innerText = tasks.length;
  document.getElementById("completedCount").innerText = completed;
}
