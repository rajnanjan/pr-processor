import  mongoose from 'mongoose';

const purchaseOrderSchema = new mongoose.Schema({
  vendor: String,
  amount: Number
});

export default mongoose.model('PurchaseOrder', purchaseOrderSchema);
