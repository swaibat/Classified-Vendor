import express from 'express';
import userRouter from './user.route';
import productRouter from './product.route';
import CategoryRouter from './category.route';
import PagesRouter from './page.route';
import FaqRouter from './faq.route';
import FavRouter from './favourite.route';
import chatRouter from './chat.route';
import NotifyRouter from './notification.route';
import UserMiddleware from '../middleware/user.middleware';
import PlanRouter from './plan.route';
import AboutRouter from './about.route';
import CurrencyRouter from './curreny.route';
import SettingsRouter from './settings.route';
import landing from './landing.route';
// import RatingsRouter from './rating.route';

const app = express.Router();

app.use(UserMiddleware.connect);
app.use('/', landing);
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/category', CategoryRouter);
app.use('/pages', PagesRouter);
app.use('/faqs', FaqRouter);
app.use('/favourite', FavRouter);
app.use('/chats', chatRouter);
app.use('/notifications', NotifyRouter);
app.use('/plans', PlanRouter);
app.use('/about', AboutRouter);
app.use('/currency', CurrencyRouter);
app.use('/settings', SettingsRouter);
// app.use('/ratings', RatingsRouter);

export default app;
