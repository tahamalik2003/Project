document.addEventListener('DOMContentLoaded', function() {
    // Get task list from local storage or initialize an empty array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Function to render the task list
    function renderTasks() {
      const taskList = document.getElementById('task-list');
      taskList.innerHTML = '';
  
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
  
        const listItem = document.createElement('li');
        listItem.textContent = task.text;
        if (task.completed) {
          listItem.classList.add('completed');
        }
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
          deleteTask(i);
        });
  
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
      }
    }
  
    // Function to add a new task
    function addTask() {
      const newTaskInput = document.getElementById('new-task');
      const newTaskText = newTaskInput.value.trim();
  
      if (newTaskText !== '') {
        tasks.push({
          text: newTaskText,
          completed: false
        });
  
        localStorage.setItem('tasks', JSON.stringify(tasks));
        newTaskInput.value = '';
        renderTasks();
      }
    }
  
    // Function to delete a task
    function deleteTask(index) {
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    }
  
    // Event listener for adding a new task
    const addTaskButton = document.getElementById('add-task');
    addTaskButton.addEventListener('click', addTask);
  
    // Render initial tasks
    renderTasks();
  });
  
