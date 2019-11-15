import express from 'express';
import userRouter from './user.route';

const app = express.Router();

app.use('/users', userRouter);


export default app;
