// Store questions and answers in an object
const chatData = {
    "hey":"hey😎",
    "hello": "Hi! How are you?",
    "am fine": "we thank God🙏",
    "how about you?": "am also fine by God's grace",
    "how was your day": "Very nice",
    "whatsapp": "kul,how about you?",
    "how are you": "I'm doing great, thanks!",
    "what's your name": "I'm Prince Afful!",
    "where are you from?": "Am from Ampenyi",
    "how old are you": "am 22 years old",
    "what is your favorite food": "rice and egg stew is my favorite food🍚",
     "what is your favorite car": "Range rover is my favorite car🚔",
"what is your favorite color": "blue is my favorite car🟦",
"what is your favorite song": "Redemption song by Bob Marley is my favorite song🎵",
"what is your favorite football club": "Chelsea is my favorite football club",
"who is your girlfriend": "Lovia Ewusi Rich is my girlfriend",
    // Add more questions and answers here...
};

// Get chat container and user input elements
const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');

// Function to add message to chat container
function addMessage(type, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type === 'user' ? 'right' : 'left');
    messageDiv.textContent = message;
    chatContainer.appendChild(messageDiv);
}

// Function to handle user input
function handleUserInput() {
    const userMessage = userInput.value.trim().toLowerCase();
    const botResponse = chatData[userMessage];

    // Clear user input field
    userInput.value = '';

    // Add user message to chat container
    addMessage('user', userMessage);

    // Check if bot has a response
    if (botResponse) {
        // Add bot response to chat container
        addMessage('bot', botResponse);
    } else {
        // Default response if no match found
        addMessage('bot', 'Sorry, I didn\'t understand that.');
    }
}

// Add event listener to send button
document.getElementById('send-btn').addEventListener('click', handleUserInput);

// Store messages in local storage
function storeMessages() {
    const messages = chatContainer.innerHTML;
    localStorage.setItem('chat-messages', messages);
}

// Retrieve stored messages
function retrieveMessages() {
    const storedMessages = localStorage.getItem('chat-messages');
    if (storedMessages) {
        chatContainer.innerHTML = storedMessages;
    }
}

// Store messages on page unload
window.onunload = storeMessages;

// Retrieve stored messages on page load
retrieveMessages();
