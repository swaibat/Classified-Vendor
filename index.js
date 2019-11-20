import express from 'express';
import cors from 'cors';
import methodOverride from 'method-override';
import subdomain from 'express-subdomain';
import err from './api/middleware/error.middleware';
import apiRoutes from './api/routes';

const app = express();
app.use(subdomain('api', apiRoutes));
app.use(methodOverride());
app.use(express.json());
app.use(cors());
app.use(apiRoutes);
app.use(err.methodError);

app.listen(process.env.PORT);

export default app;
