import express from 'express';
import prRoutes from  './routes/prRoutes.js'
import {errorHandler} from './middleware/error.middleware.js'
import reportRoutes from './routes/reportRoutes.js';
import permissionRoutes from './routes/permissionRoutes.js';
import agentRoutes from './routes/agentRoutes.js'

const app = express();
app.use(express.json());
app.use('/api/v1/permissions', permissionRoutes);
app.use('/api/v1/pr', prRoutes);
app.use('/api/v1/reports', reportRoutes);
app.use('/api/v1/agents', agentRoutes);
app.use(errorHandler)
export default app
