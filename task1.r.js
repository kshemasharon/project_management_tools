const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendMessageButton = document.getElementById("send-message-button");

// Add a task to the task list
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
});

// Send a message in the chat
sendMessageButton.addEventListener("click", () => {
    const messageText = messageInput.value.trim();
    if (messageText) {
        const messageElement = document.createElement("div");
        messageElement.textContent = messageText;
        chatBox.appendChild(messageElement);
        messageInput.value = "";
    }
});