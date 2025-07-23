import PurchaseOrder from '../models/PurchaseOrder.js';
import Invoice from '../models/Invoice.js';

export const getSpendReport = async (req, res,next) => {
  try {
    const allPOs = await PurchaseOrder.find();
    console.log('All Purchase Orders:', allPOs);
    const poAgg = await PurchaseOrder.aggregate([
      { $group: { _id: '$vendor', totalPO: { $sum: '$amount' } } }
    ]);

    const invoiceAgg = await Invoice.aggregate([
      { $group: { _id: '$vendor', totalInvoice: { $sum: '$paidAmount' } } }
    ]);
    const report = {};

    poAgg.forEach(po => {
        console.log(po)
      report[po._id] = { vendor: po._id, totalPO: po.totalPO, totalInvoice: 0 };
    });

    invoiceAgg.forEach(inv => {
      if (!report[inv._id]) {
        report[inv._id] = { vendor: inv._id, totalPO: 0, totalInvoice: inv.totalInvoice };
      } else {
        report[inv._id].totalInvoice = inv.totalInvoice;
      }
    });

    res.status(200).json({status:true,data:Object.values(report)});
  } catch (err) {
    next(err);
  }
};

export const addSampleInvoicedata = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data)
    const createdInvoice = await Invoice.create(data);
    res.status(201).json({ success: true, data: createdInvoice });
  } catch (error) {
    next(error); 
  }
};

export const addSamplePOdata = async (req, res, next) => {
  try {
    const data = req.body;
    const createdPO = await PurchaseOrder.create(data);
    res.status(201).json({ success: true, data: createdPO });
  } catch (error) {
    next(error);
  }
};


