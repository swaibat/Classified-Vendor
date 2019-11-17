import express from 'express';
import userRouter from './user.route';
import productRouter from './product.route';

const app = express.Router();

app.use('/users', userRouter);
app.use('/products', productRouter);


export default app;
