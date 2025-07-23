
import  mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
  vendor: String,
  paidAmount: Number
});

export default mongoose.model('Invoice', invoiceSchema);
