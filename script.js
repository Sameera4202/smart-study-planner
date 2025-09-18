document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  const taskInput = document.getElementById("task-input");
  const dateInput = document.getElementById("date-input");
  const taskList = document.getElementById("task-list");
  const timeline = document.getElementById("timeline");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskText = taskInput.value;
    const taskDate = dateInput.value;

    if (taskText && taskDate) {
      const li = document.createElement("li");
      li.innerHTML = `
        <span><strong>${taskText}</strong> - ${taskDate}</span>
        <button class="delete-btn">❌</button>
      `;

      taskList.appendChild(li);

      // Add to timeline
      const timelineEntry = document.createElement("div");
      timelineEntry.textContent = `${taskDate}: ${taskText}`;
      timeline.appendChild(timelineEntry);

      // Clear inputs
      taskInput.value = "";
      dateInput.value = "";
    }
  });

  // Delete task
  taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const li = e.target.parentElement;
      li.remove();
    }
  });
});
