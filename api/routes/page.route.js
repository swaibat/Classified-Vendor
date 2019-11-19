import express from 'express';
import fileUpload from 'express-fileupload';
// import userMiddleware from '../middleware/user.middleware';
import PageController from '../controller/page.controller';

const router = express.Router();

router.use(fileUpload());

router.get('/:id', PageController.get);


export default router;
