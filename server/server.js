const express = require('express');
const cors = require('cors');
const http = require('http');
const moment = require('moment');
const PORT = 7007;
const socketio  = require('socket.io')

/**
* Import Routes
*/
const indexRouter = require('./router/index');
const { addUsers, removeUsers, addCommands, checkForCommands, getUserCommandList, updateUserCommandList, getUsers } = require('./helpers/users');
const { getCommand, shuffleWithoutRepeat } = require('./helpers/commands');

const socketIoCorsSetting = {
  cors: {
    origin: 'http://localhost:7006',
    methods: ['POST', 'GET']
  }
}

// create http connection and use socketio to convert to websocket connection
const app = express();
const server = http.createServer(app);

//since socket.io V3, cors settings is put in d socket object configuration to avoid cors error
const io = socketio(server, socketIoCorsSetting);



app.use(cors());


// use routes
app.use(indexRouter);



io.on('connection', (socket) => {
  // socket object can be used to send messages to connected clients.
  console.log('new client connected');
  const {id} = socket;
  const botName = 'Ottonova Bot(Thomas)';

  /**
  * @param register the client to the user list and send back a welcome message when a newuser joins
  */

  socket.on('join', ({ author }, callback) => {
    const commandList = shuffleWithoutRepeat();
    addUsers({author, id, commands: commandList});
    const timePosted = new Date();
    socket.emit('message', { author: botName, message: `hi  ${author}, welcome. How can I be of help today`, time: `${timePosted}` })
  });

 /**
  * @param {string} Emit a message to user on receiving a message
  */

  socket.on('send message', ({author, message}, callback) => {
    // console.log(author, message);
    let reply = `Hey ${author}, you said '${message}', right?`;
    socket.emit('message', {author: botName, message: reply})
  });

  /**
  * @param {string} Emit a command if the user has not interacted  all widgets yet when a command is received
  */

  socket.on('command', ({ author, message }) => {
    const userList = getUsers();
    const commandList = getUserCommandList({ author, users: userList });
      const command = getCommand(commandList);
      updateUserCommandList({ author, users: userList });
      socket.emit('command response', {author: botName, command});
  });

  socket.emit('connection', null);
  socket.on('disconnect', () => {
    console.log('client just left');
    const userList = getUsers();
    // console.log(id, userList);
    const news = removeUsers({ id })
    console.log(news, 'Client details that left');
    // socket.emit('left', null, () => {
    //   console.log('client left chat');
    // });
  });
});


server.listen(PORT, () => {
  console.log(`listening on *:'${PORT}'`);
});
