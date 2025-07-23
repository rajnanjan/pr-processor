import { errorResponse } from '../utils/errorResponse.js';

/**
 * Description
 * @param { import('joi').Schema } schema
 * @returns {any}
 */
export const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    const valid = error == null;
    if (valid) {
      return next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');
      res.locals.message = message;
      next(errorResponse(422, message));
    }
  };
};