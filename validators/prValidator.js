import Joi from 'joi';

export const prSchema = Joi.object({
  totalAmount: Joi.number().required(),
  deliveryDays: Joi.number().required()
});

export const poSchema = Joi.array().items(
  Joi.object(
  {
    vendor:Joi.string().required(),
    amount:Joi.number().required()
  }))
export const invSchema = Joi.array().items(
  Joi.object(
  {
    vendor:Joi.string().required(),
    paidAmount:Joi.number().required()
  }))
export const permissionSchema = Joi.array().items(
  Joi.object(
  {
    plant: Joi.string().required(),
    amount: Joi.number().required(),
    material: Joi.string().required()
  }))


