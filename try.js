//Store questions and answers in an object
const chatData={
    "hi":"hi how are you doing?",
    "am fine":"we thank God",
    "what is your name":"my name is Prince Kobbinah Afful",
    "good morning":"good morning",
    "good afternoon":"good afternoon",
    "good evening":"good evening",

}

//Get elements of various user inputs
const chatContainer=document.getElementById('chat-container');
const userInput=document.getElementById('user-input');

//Function to add message to chat container
function addMessage(message,type){
    const messageDiv=document.createElement('Div');
    messageDiv.classList.add('message',type === 'user' ? 'right' : 'left' );
    messageDiv.textContent=message;
    chatContainer.appendChild(messageDiv);
}

//Function to handle user inputs
function handleuserinput(){
    const userMessage = userInput.ariaValueMax.trim().toLocaleLowerCase();
    const botResponse = chatData[userMessage];

    //Clear user input field
    userInput.value = '';

    //add user message to chat container
    addMessage('user',userMessage);
}