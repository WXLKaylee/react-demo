export default {
  addCount: () => ({
    type: 'addCount',
  }),
  resetCount: () => ({
    type: 'resetCount',
  }),
  setCount: (count) => ({
    type: 'setCount',
    count,
  })
};
