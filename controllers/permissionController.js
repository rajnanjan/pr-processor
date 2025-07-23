import PR from '../models/PurchaseRequisition.js';
import redisClient from '../redis/redisClient.js';
import { errorResponse } from '../utils/errorResponse.js';
import  fs from 'fs';
import  path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const permissionsPath = path.join(__dirname, '..', 'config', 'permissions.json');
const rolePermissions = JSON.parse(fs.readFileSync(permissionsPath, 'utf-8'));

export const getPRs = async (req, res,next) => {
    try {
        const userRole = req.query.role;
      
        if (!userRole || !rolePermissions[userRole]) {
         throw 'Invalid or missing role';
        }
        let permissions;

        const cached = await redisClient.get(userRole);
        if (cached) {
          permissions = JSON.parse(cached);
        } else {
          permissions = rolePermissions[userRole];
          await redisClient.set(userRole, JSON.stringify(permissions), { EX: 300 }); 
        }
        const filteredPRs = await PR.find({
          plant: { $in: permissions.allowedPlants },
          amount: { $lte: permissions.maxAmount }
        });
        res.status(200).json({status:true,data:filteredPRs});
    } catch (error) {
        next(errorResponse(400,error))
    }
};

export const addPRS= async (req,res,next)=>{
  try {
    const data = req.body;
    const createPRs = await PR.create(data);
    res.status(201).json({ success: true, data: createPRs });
  } catch (error) {
    next(error);
  }
}
