import { executeFlow } from '../orchestrator.js';

export const runAgentFlow = async (req, res,next) => {
  try {
    const result = await executeFlow(req.body);
    res.status(201).json({status:true,data:result});
  } catch (err) {
    next(err)
  }
};

