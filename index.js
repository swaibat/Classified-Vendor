import http from 'http';
import express from 'express';
import cors from 'cors';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import err from './api/middleware/error.middleware';
import apiRoutes from './api/routes';

const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use((req, res, next) => {
  req.io = io;
  next();
});
app.use(cookieParser());
app.use(methodOverride());
app.use(express.json());
app.use(cors());
app.use(apiRoutes);
app.use(err.methodError);

server.listen(process.env.PORT);

export default app;
