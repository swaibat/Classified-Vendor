import express from 'express';
import productController from '../controller/product.controller';


const app = express.Router();

app.get(
  '/',
  productController.getAll,
);

export default app;
