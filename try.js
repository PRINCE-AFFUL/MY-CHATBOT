//store various messages and it's response
const chatData={
    "hello":"hi",
    "how are you?":"pls am fine",
    "sap":"adey",
};

//get the various elements
const chatContainer=document.getElementById('chat-container');
const userInput=document.getElementById('user-input');

//finction to add message to ....
function addMessage(type, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type === 'user' ? 'right' : 'left');
    messageDiv.textContent = message;
    chatContainer.appendChild(messageDiv);
};


//function to handle user input
function handleUserInput(){
    const userMessage = userInput.ariaValueMax.trim().toLocaleLowerCase();
    const botResponse=chatData[userMessage];


//clear user input field
userInput.value='';

//add user message to chat container
addMessage('user',userMessage);

//check if the bot has a response
if (botResponse){
    addMessage('bot',botResponse)
}else{
    //dliver default message
    addMessage('bot','sorry I do not have an answer to your question')
}

};

//add event listener to the send button
document.getElementById('send-btn').addEventListener('click',handleUserInput);

//store messages in local storage
function storedMessages(){
    const storedMessages=localStorage.getItem('chat-messages')

    if(storedMessages){
        chatContainer.innerHTML=storedMessages;
    }
};

// Store messages on page unload
window.onunload = storeMessages;

// Retrieve stored messages on page load
retrieveMessages();