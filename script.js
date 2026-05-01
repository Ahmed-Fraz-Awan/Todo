const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const counter = document.getElementById("counter");
const clearAllBtn = document.getElementById("clearAll");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

console.log("App Loaded"); // Debug log

// Render tasks
function renderTodos() {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    li.textContent = todo.text;
    if (todo.completed) li.classList.add("completed");

    // Toggle complete
    li.addEventListener("click", () => {
      todos[index].completed = !todos[index].completed;
      saveTodos();
      renderTodos();
    });
    
li.addEventListener("dblclick", () => {
  const newText = prompt("Edit task:", todo.text);
  if (newText) {
    todos[index].text = newText;
    saveTodos();
    renderTodos();
  }
});
    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";

    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  });

  updateCounter();
}

// Add task
form.addEventListener("submit", (e) => {
  e.preventDefault();

  todos.push({ text: input.value, completed: false });
  input.value = "";

  saveTodos();
  renderTodos();
});

// Save to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Counter
function updateCounter() {
  const completed = todos.filter(t => t.completed).length;
  counter.textContent = `Total: ${todos.length} | Completed: ${completed}`;
}

// Clear all
clearAllBtn.addEventListener("click", () => {
  if (confirm("Are you sure?")) {
    todos = [];
    saveTodos();
    renderTodos();
  }
});

// Initial load
renderTodos();