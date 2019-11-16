import express from 'express';
import cors from 'cors';
import path from 'path';
import err from './api/middleware/error.middleware';
import apiRoutes from './api/routes';

const app = express();
app.set(path.join(__dirname, '../', 'utils', 'email.templates'));
app.set('view engine', 'pug');

app
  .use(express.json())
  .use(cors())
  .use('/api/v1', apiRoutes)
  .use(err.methodError)
  .use(err.serverError);

app.listen(process.env.PORT, () => console.warn(process.env.PORT));

export default app;
