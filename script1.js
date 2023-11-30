function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const taskList = document.getElementById("taskList");
      const newTask = document.createElement("li");
      newTask.innerText = taskText;
      
      newTask.onclick = function() {
        newTask.classList.toggle("completed");
      };
  
      taskList.appendChild(newTask);
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }
  