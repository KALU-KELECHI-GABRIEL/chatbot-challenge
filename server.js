const app = require('express')();
// const cors = require('cors');

// app.use(cors());

const http = require('http').createServer(app);

//since socket.io V3, cors settings is put in d socket object configuration to avoid cors error

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:7006',
    methods: ['POST', 'GET']
  }
});
const PORT = 7007;
const STATIC_CHANNELS = ['global_notifications', 'global_chat'];


http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

io.on('connection', (socket) => {
  // socket object can be used to send messages to connected clients.
    console.log('new client connected');
    socket.emit('connection', null);
});