document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('input').value;
    document.getElementById('input').value = '';

    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div class="message user-message">${userInput}</div>`;

    
    let botResponse = '';
    if (userInput.toLowerCase().includes('hi') || userInput.toLowerCase().includes('hello')) {
        botResponse = 'Hello! How can I help you?';
    } else if (userInput.toLowerCase().includes('how are you')) {
        botResponse = 'I am just a program, but thanks for asking!';
    } else if (userInput.toLowerCase().includes('help') || userInput.toLowerCase().includes('assist')) {
        botResponse = 'Sure! What do you need help with?';
    } else {
        botResponse = 'I am sorry, I do not understand that.';
    }

    chatBox.innerHTML += `<div class="message bot-message">${botResponse}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight; 
});