import express from 'express';
const router = express.Router();
import { runAgentFlow } from '../controllers/agentController.js';

router.post('/executeagentflow', runAgentFlow);

export default router;
