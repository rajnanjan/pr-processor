import express from 'express';
const router = express.Router();
import { getSpendReport,addSampleInvoicedata,addSamplePOdata } from '../controllers/reportController.js';
import { validate } from '../middleware/joiMiddleware.js';
import { poSchema,invSchema } from '../validators/prValidator.js';
router.get('/spendreport', getSpendReport);
router.post('/po',validate(poSchema), addSamplePOdata);
router.post('/inv',validate(invSchema), addSampleInvoicedata);

export default router;