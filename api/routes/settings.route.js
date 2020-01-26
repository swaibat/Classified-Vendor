import express from 'express';
import SettingsController from '../controller/settings.contoller';

const router = express.Router();

router.get('/', SettingsController.getSettings);

router.patch('/', SettingsController.update);

export default router;
