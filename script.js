async function sendMessage() {
    const chatBox = document.getElementById("chatBox");

    const userInput = document.getElementById("userInput");

    const userMessage = userInput.value;

    if(!userMessage) return;

    const userDiv = document.createElement("div");
    userDiv.className = "user-message message"
    userDiv.textContent = userMessage
    chatBox.appendChild(userDiv);

    userInput.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;

    const endpoint = "";
    const apiKey = "";
    const deploymentId = "";
    const apiVersion = "";
 
    const url = ``
}