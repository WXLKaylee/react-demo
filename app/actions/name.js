const REQUEST_NAME = 'REQUEST_NAME';
const RECEIVE_NAME = 'RECEIVE_NAME';
const INVALID_NAME = 'INVALID_NAME';

const requestName = () => ({ type: REQUEST_NAME });

const invalidName = error => ({
  type: INVALID_NAME,
  error
});

const receiveName = json => ({
  type: RECEIVE_NAME,
  name: json.name,
  receiveAt: Date.now()
});

const fetchName = () => dispatch => {
  dispatch(requestName());
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'kaylee'
      });
      // reject('error error');
    }, 1000)
  })
    .then(res => dispatch(receiveName(res)))
    .catch(err => dispatch(invalidName(err)));
};

const NAME = {
  REQUEST_NAME,
  RECEIVE_NAME,
  INVALID_NAME,
  fetchName
};

export default NAME;
