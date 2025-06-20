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

    const endpoint = "https://lucasbaptista37005-resource.openai.azure.com";
    const apiKey = "";
    const deploymentId = "gpt-4o";
    const apiVersion = "2025-01-01-preview";
 
    const url = `${endpoint}/openai/deployments/${deploymentId}/chat/completions?api-version=${apiVersion}`

    const data = {
        messages: [{role: "user", content: userMessage}],
        max_tokens:100,
        temperature: 0.2,
    }

    const headers = {
        "Content-Type": "application/json",
        "api-key": apiKey,
    }

    try{

        const response = await fetch(url, {
            method: "Post",
            headers: headers,
            body: JSON.stringify(data)
        });

        if(response.ok){
            const result = await response.json()
            const botMessage = result.choices[0].message.content;
            
            const botDiv = document.createElement("div");
            botDiv.className = "bot-message message";
            botDiv.textContent = botMessage;
            chatBox.appendChild(botDiv);

            chatBox.scrollTop = chatBox.scrollHeight;
        } else {
            console.error("Erro na requisição", response.status, response.statusText);

            const botDiv = document.createElement("div");
            botDiv.className = "bot-message message";
            botDiv.textContent = "Erro na se comunicar com o serviço";
            chatBox.appendChild(botDiv);
        }

    }catch(error){

        console.error("Error", error)

        const botDiv = document.createElement("div");
        botDiv.className = "bot-message message";
        botDiv.textContent = "Erro ao se comunicar com o serviço";
        chatBox.appendChild(botDiv);
    }
}