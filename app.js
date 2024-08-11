const socket = io('http://localhost:3000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');

const userName = prompt("Enter your name to join");
socket.emit('new-user-joined', userName);

/*const append = (message,position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageContainer.append(messageElement);
}

    socket.on('user-joined', name =>{
        append('${name} joined the chat', 'left')
    })

    socket.on('receive', data =>{
        append('${data.name}: ${data.message}', 'left');
    })

    socket.on('left', name =>{
        append('${name} left the chat', 'left');
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = messageInput.value;
        append('You: ${message}','right');
        socket.emit('send', message);
        messageInput.value=''
    })*/
