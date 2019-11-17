import express from 'express';
import CategoryController from '../controller/category.conroller';

const router = express.Router();

router.get('/', CategoryController.getAll);

export default router;
