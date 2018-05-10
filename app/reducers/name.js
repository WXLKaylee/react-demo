import { NAME } from '../actions';

export default null;

export const name = (state = {
  isFetching: false,
  didInvalidate: false,
  error: null,
  name: ''
}, action) => {
  switch (action.type) {
    case NAME.INVALID_NAME:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    case NAME.REQUEST_NAME:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
        name: ''
      });
    case NAME.RECEIVE_NAME:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        name: action.name,
      });
    default:
      return state;
  }
};
