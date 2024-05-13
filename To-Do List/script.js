const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
        return;
    }

    const taskText = inputBox.value.trim();

    // Create a new list item
    const li = document.createElement("li");
    
    // Create a span for the task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Add a click event listener to toggle task completion
    taskSpan.addEventListener("click", function() {
        li.classList.toggle("checked");
    });

    // Create a button for deleting the task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete-button');

    // Add click event listener to delete button
    deleteButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent li click event from firing
        listContainer.removeChild(li); // Remove the task item
    });

    // Append task text and delete button to the list item
    li.appendChild(deleteButton);
    li.appendChild(taskSpan);

    // Append the new list item to the list container
    listContainer.appendChild(li);

    // Clear the input box after adding the task
    inputBox.value = '';
}
