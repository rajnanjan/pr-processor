export default {
  run: async (input) => {
    console.log('[Extracting]');
    return {
      prNumber: input.prNumber,
      amount: input.amount
    };
  }
};
