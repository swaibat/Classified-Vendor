/* eslint-disable no-tabs */
import express from 'express';
import cheerio from 'cheerio';
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
const axios = require('axios');

const app = express.Router();

app.use(UserMiddleware.connect);
app.use('/', landing);

// app.use('/cont', (req, res, next) => {
//   const arr = [];
//   const avg = [];
//   axios.get('https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population').then(async html => {
//     const $ = await cheerio.load(html.data);
//     $('.wikitable > tbody > tr').each((i, el) => {
//       arr.push($(el).text());
//     });
//     arr.map(e => {
//       avg.push({ country: e.trim().split(/\n/g,)[1].trim(), population: e.trim().split(/\n/g,)[2] });
//     });
//     avg.shift();
//     avg.pop();
//     res.send({ data: avg });
//   });
// });

// app.use('/cont', (req, res, next) => {
//   const arr = [];
//   const avg = [];
//   axios.get('https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population').then(async html => {
//     const $ = await cheerio.load(html.data);
//     $('.wikitable > tbody > tr').each((i, el) => {
//       arr.push($(el).text());
//     });
//     arr.map(e => {
//       avg.push({ country: e.trim().split(/\n/g,)[1].trim(), population: e.trim().split(/\n/g,)[2] });
//     });
//     avg.shift();
//     avg.pop();
//     res.send({ data: avg });
//   });
// });

app.use('/cont', (req, res, next) => {
  const arr = [];
  const avg = [];
  axios.get('http://127.0.0.1:5500/Latest%20movies%20on%20MunoWatch.htm').then(async html => {
    const $ = await cheerio.load(html.data);
    $('.g-py-15').each((i, el) => {
      arr.push($(el).text());
    });
    arr.map(e => {
      avg.push({ country: e.trim().split(/\n/g,)[1].trim(), population: e.trim().split(/\n/g,)[2] });
    });
    avg.shift();
    avg.pop();
    res.send({ data: avg });
  });
});

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
