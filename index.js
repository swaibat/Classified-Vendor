import http from 'http';
import express from 'express';
import cors from 'cors';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import err from './api/middleware/error.middleware';
import apiRoutes from './api/routes';
import helper from './api/utils/auth.utils';

const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const connectedClients = {};
const onlineUsers = {};
io.use((socket, next) => {
  const { token } = socket.handshake.query;
  helper.decodeToken(token, (error, data) => {
    if (data) {
      const clientKey = Number.parseInt(data.id, 10);
      connectedClients[clientKey] = connectedClients[clientKey] || [];
      connectedClients[clientKey].push(socket.id);
      Object.assign(onlineUsers, { [data.id]: data });
    }
    io.on('connect', () => {
      io.emit('roomData', { onlineUsers });
      io.emit('isTyping', true);
    });
    socket.on('disconnect', () => {
      if (data) {
        delete onlineUsers[data.id];
        io.emit('roomData', { onlineUsers });
      }
    });
    next();
  });
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedClients = connectedClients;
  next();
});

app.use(express.static('api/uploads'));
app.use(cookieParser());
app.use(methodOverride());
app.use(express.json());
app.use(cors());
app.use(apiRoutes);
app.use(err.methodError);

server.listen(process.env.PORT);

export default app;
