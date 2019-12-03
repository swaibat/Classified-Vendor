import express from 'express';
import userRouter from './user.route';
import productRouter from './product.route';
import CategoryRouter from './category.route';
import PagesRouter from './page.route';
import FaqRouter from './faq.route';
import all from '../controller/page.controller';

const app = express.Router();

app.get('/', all.home);
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/categorys', CategoryRouter);
app.use('/pages', PagesRouter);
app.use('/faqs', FaqRouter);


export default app;
