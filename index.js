import express from 'express';
import cors from 'cors';
import methodOverride from 'method-override';
import err from './api/middleware/error.middleware';
import apiRoutes from './api/routes';
import '@babel/polyfill';

const app = express();
app.use(methodOverride());
app.use(express.json());
app.use(cors());
app.use(apiRoutes);
app.use(err.methodError);

app.listen(process.env.PORT);

export default app;
