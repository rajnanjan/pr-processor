import  Jexl from 'jexl';

export const evaluateRule = async (condition, context) => {
  try {
    return await Jexl.eval(condition, context);
  } catch (err) {
    console.error('Rule evaluation failed:', err.message);
    return false;
  }
};
