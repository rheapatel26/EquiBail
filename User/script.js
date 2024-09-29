// Get elements
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const chatbox = document.getElementById("chatbox");

// Function to add message to the chatbox
function addMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to the bottom

    // If it's the bot's message, type it out
    if (sender === "bot") {
        typeOutMessage(message, messageElement);
    } else {
        messageElement.textContent = message;
    }
}

// Function to type out the bot's response character by character
function typeOutMessage(message, element) {
    let index = 0;
    const typingSpeed = 30; // Adjust typing speed (in milliseconds) here

    function typeNextChar() {
        if (index < message.length) {
            element.textContent += message.charAt(index);
            index++;
            chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll during typing
            setTimeout(typeNextChar, typingSpeed);
        }
    }
    
    typeNextChar(); // Start typing the message
}

// Function to handle bot responses based on user input
function botResponse(userMessage) {
    // Define custom responses for specific inputs
    const customResponses = {
        "hello": "Hi there! How can I assist you today?",
        "help": "I'm here to help! What do you need assistance with?",
        "nyaya.ai": "Nyaya.AI is your AI assistant for legal assistance.",
        "report": "You can get your report by clicking on the 'Get your Report' button.",
        "lawyer": "Looking for a lawyer? You can find them under 'Bail Assistance'.",
        "can you tell me about the legal consequences of committing theft": "The legal consequences of committing a specific offense can vary depending on the jurisdiction and the specifics of the case. Generally, consequences may include fines, imprisonment, community service, or other penalties. It's important to consult with a legal professional to understand the full implications and receive guidance tailored to your situation.",
        // Add more custom responses here
    };

    // Convert the user input to lowercase for case-insensitive matching
    const normalizedMessage = userMessage.toLowerCase();

    // Return the custom response if available, otherwise return a default message
    return customResponses[normalizedMessage] || "I'm not sure I understand. Could you please clarify?";
}

// Function to show typing indicator
function showTypingIndicator() {
    const typingDiv = document.createElement("div");
    typingDiv.classList.add("message");
    typingDiv.classList.add("bot-message");
    typingDiv.id = "typingIndicator";
    typingDiv.innerHTML = `
        <div class="typing">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
    `;
    chatbox.appendChild(typingDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to the bottom
}

// Function to hide typing indicator
function hideTypingIndicator() {
    const typingDiv = document.getElementById("typingIndicator");
    if (typingDiv) {
        typingDiv.remove();
    }
}

// Event listener for sending messages
sendButton.addEventListener("click", () => {
    const userMessage = userInput.value.trim();

    if (userMessage) {
        // Add the user message to the chatbox
        addMessage(userMessage, "user");
        userInput.value = ""; // Clear input

        // Show typing indicator before bot responds
        showTypingIndicator();

        // Simulate bot thinking with a delay
        setTimeout(() => {
            // Hide the typing indicator
            hideTypingIndicator();

            // Get the bot's response based on the user's message
            const botMessage = botResponse(userMessage);
            addMessage(botMessage, "bot");
        }, 1500); // 1.5 second delay for a more natural feel
    }
});

// Allow pressing Enter to send message
userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendButton.click();
    }
});
