const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const cors = require('cors');

const Sockets = require('./models/sockets');

const app = express();
const server = http.createServer(app);

const io = socketio(server, {
  /*configuraciones adicionales*/
});

app.use(cors());
app.use(express.static(path.resolve(__dirname, './public')));

new Sockets(io);

module.exports = server;
