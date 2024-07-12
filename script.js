const addTaskButton = document.getElementById('addTaskButton');
const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value;
    if (taskText === '') return;

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    // Add the delete button to the list item
    listItem.appendChild(deleteButton);

    // Add the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input
    newTaskInput.value = '';
});
