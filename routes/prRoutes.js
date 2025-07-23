import express from 'express'
import { processPR } from '../controllers/prController.js';
import {prSchema} from '../validators/prValidator.js';
import {validate} from '../middleware/joiMiddleware.js'
const router = express.Router();

router.post('/raise', validate(prSchema), processPR);

export default router;
