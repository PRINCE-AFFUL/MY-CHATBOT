// Store questions and answers in an object
const chatData = {
    "I can't ":"ah okay",
    "what are you doing":"Am answering your questions",
   "what is your purpose":"My purpose is to help make the world a better place to live by providing individuals with the needed information that they will seek from me",
   "ok":"ok",
   "kk":"kk",
   "yoo":"Yooo jigga wat dey go on",
   "nothing dey go on":"ok same here",
   "normal vibz":"ok same here",
   "bad":"sorry about that🙏",
   "how is life":"good",
   "we are managing":"okay it shall be well",
   "wtg":"yh sure",
   "wtG":"yh always",
   "gud":"we praise God",
   "yes":"alright",
   "good":"yh sure",
   "nice":"🤘",
   "yes pls":"alright👋",
   "same here":"alright👋",
   "yh":"yh",
   "no":"okay",
   "tG":"🙏",
   "we thank God":"yh always🙏",
   "bye":"bye🙋‍♂️",
   "wossup":"I base your side?",
"have a good night":"sound sleep",
"sound sleep":"same to you",
   "abase":"sure",
   "am doing well":"That's great",
   "am doing good":"That's fine",
   "prince":"yes plss. How can I help you? ",
   "Prince":"yes plss. How can I help you? ",
   "fine":"TG",
   "fyn":"tnx be to God",
   "great":"bleesed be the name of the lord",
   "gr8":"bleesed be the name of the lord",
   "I love you":"I love you too",
   "am fine":"we thank the Almighty God",
//    love matters
"luv":"love💛",
"love":"love💗",
"Love":"love💗",
"babe":"babe💙",
"Babe":"babe💙",
"Baby":"babe💙",
"baby":"babe💙",
"bby":"babe💙",
"sweetherat":"sweetheart",
"sweetie":"sweetie",
"darling":"darling",
"honey":"honey",
"baby boy":"yes darling",
"babe boy":"baby",
"bby boy":"bby ",
"odo ":" odo💚",
"Odo ":"odo💚 ",
"Afful ":"Yes pls do you need my help? ",
"afful":"Yes pls do you need my help? ",
"heyya":"heyya ",
"Heyya":"heyya ",

// conditions and emotions
"wow":"😲",
"woow":"😲",
"sweet":"sweet🍧",
"so sweet":"so sweet🍧",






//    greetings
   "Good morning":"good morning how are you doing",
   "good morning":"good morning how are you doing",
   "gud morning":"good morning how are you doing",

"Gud evening":"good evening how are you doing",
"Gd morning":"good morning how are you doing",
"gd morning":"good morning how are you doing",
   
"gm":"good morning how are you doing",
"pls am fine":"we thank God in the most high ",
"Good afternoon":"good afternoon how are you doing",
"good afternoon":"good afternoon how are you doing",
"gud afternoon":"good afternoon how are you doing",
"Gud afternoon":"good afternoon how are you doing",
"Gd afternoon":"good afternoon how are you doing",
"gd afternoon":"good afternoon how are you doing",
"good day":"good day",

"Good evening":"good evening how are you doing",
"good evening":"good evening how are you doing",
"gud evening":"good evening how are you doing",
"Gud evening":"good evening how are you doing",
"Gd evening":"good evening how are you doing",
"gd evening":"good evening how are you doing",
"good day":"good day",

   "tnx":"welcome",
   "good":"wtG",
   "yo":"yo",
   "howfar":"kul oo your side?",
   "how far":"everything kul",
    "hey":"hey😎",
    "hi":"hi🙄 how are you doing",
    "what is your name":"My name is Prince Afful",
    "okay":"okay😐",
    "kul":"okay",
    "adey":"okay",
    "sap":"adey. Ur side?",
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
        addMessage('bot', 'Sorry, I didn\'t understand that so can you pls try to rephrase your statement?');
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
