import express from 'express';
import cors from 'cors';
import methodOverride from 'method-override';
import err from './api/middleware/error.middleware';
import apiRoutes from './api/routes';

const app = express();

app.use(methodOverride());
app.use(express.json());
app.use(cors());
app.use('/api/v1', apiRoutes);
app.use(err.methodError);

app.listen(process.env.PORT);

export default app;
