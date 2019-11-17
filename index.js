import express from 'express';
import cors from 'cors';
import err from './api/middleware/error.middleware';
import apiRoutes from './api/routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1', apiRoutes);
app.use(err.methodError);
app.use(err.serverError);

app.listen(process.env.PORT);

export default app;
