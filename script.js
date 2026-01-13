// Attach event to Add button
document.getElementById("addBtn").onclick = addTask;

function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") return;

  // Create list item
  let li = document.createElement("li");
  li.textContent = taskText;

  // Complete button
  let completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = function () {
    li.style.textDecoration = "line-through";
    updateCounts();
  };

  // Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.onclick = function () {
    li.remove();
    updateCounts();
  };

  // Add buttons to list item
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  // Add list item to task list
  document.getElementById("taskList").appendChild(li);

  // Clear input field
  input.value = "";
  toggleAddButton();
  updateCounts();
}

// Disable Add button when input empty
function toggleAddButton() {
  let input = document.getElementById("taskInput");
  let addBtn = document.getElementById("addBtn");
  addBtn.disabled = input.value.trim() === "";
}

// Update task counts
function updateCounts() {
  let tasks = document.querySelectorAll("#taskList li");
  let completed = Array.from(tasks).filter(li => li.style.textDecoration === "line-through");
  document.getElementById("totalCount").textContent = tasks.length;
  document.getElementById("completedCount").textContent = completed.length;
}
