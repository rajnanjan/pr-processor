export default {
  run: async (input) => {
    console.log('[Creating]');
    input.status = 'Created';
    return input;
  }
};
