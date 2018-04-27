
const count = (state = {
  count: 0,
  preCount: -1,
  nextCount: 1,
}, action) => {
  let { count, preCount, nextCount } = state;
  switch (action.type) {
    case 'addCount': // 加1
      return Object.assign({}, state, {
        preCount: count,
        count: count + 1,
        nextCount: count + 2,
      });
    case 'resetCount': // 重置count
      return Object.assign({}, state, {
        preCount: -1,
        count: 0,
        nextCount: 1,
      });
    case 'setCount': // 设置count
      return Object.assign({}, state, {
        preCount: action.count.preCount,
        count: action.count.count,
        nextCount: action.count.nextCount,
      });
    default:
      return state;
  }
};

export default count;
