import  fs from 'fs';
import  path from 'path';
import { evaluateRule } from '../utils/ruleEngine.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rulesPath = path.join(__dirname, '..', 'config', 'rules.json');
const rules = JSON.parse(fs.readFileSync(rulesPath, 'utf-8'));

export const processPR = async (req, res,next) => {
  try {
    const pr = { ...req.body };
    for (const rule of rules.approvalRules) {
      const isMatch = await evaluateRule(rule.condition, pr);
      if (isMatch) {
        if (rule.setStatus) pr.status = rule.setStatus;
        if (rule.urgency) pr.urgency = rule.urgency;
      }
    }
    res.status(201).json({status:true,data:pr});
  } catch (error) {
    next(error)
  }
};

