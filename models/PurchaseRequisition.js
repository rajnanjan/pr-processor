import mongoose from 'mongoose';

const prSchema = new mongoose.Schema({
  plant: String,
  amount: Number,
  material: String
});

export default mongoose.model('PurchaseRequisition', prSchema);