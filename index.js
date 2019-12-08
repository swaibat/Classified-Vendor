import http from 'http';
import express from 'express';
import cors from 'cors';
import methodOverride from 'method-override';
import err from './api/middleware/error.middleware';
import apiRoutes from './api/routes';
import socketio from 'socket.io';
import AuthHelper from './api/utils/auth.utils';

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const connectedClients = {};
io.use((socket, next) => {
  const { token } = socket.handshake.query;
  const userData = AuthHelper.decodeToken(token);
  if (!userData.error) {
    console.log(userData);
    const clientKey = Number.parseInt(userData.userId, 10);
    connectedClients[clientKey] = connectedClients[clientKey] || [];
    connectedClients[clientKey].push(socket.id);
  }
  next();
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedClients = connectedClients;
  next();
});
app.use(methodOverride());
app.use(express.json());
app.use(cors());
app.use(apiRoutes);
app.use(err.methodError);

server.listen(process.env.PORT);

export default app;
