export default {
  run: async (input) => {
    console.log('[Validating]');
    if (!input.prNumber || typeof input.amount !== 'number') {
      throw new Error('Invalid PR data');
    }
    return input;
  }
};
