import express from 'express'
import { getPRs,addPRS } from '../controllers/permissionController.js';
import { validate } from '../middleware/joiMiddleware.js';
import {permissionSchema} from '../validators/prValidator.js';
const router = express.Router();

router.get('/getprs', getPRs);
router.post('/addprs', validate(permissionSchema),addPRS)

export default router;
