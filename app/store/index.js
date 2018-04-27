import { compose, createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';


const getDevStore = (initialState) => {
  const store = createStore(
      reducers,
      initialState,
      compose(
          applyMiddleware(
              createLogger()
          ),
          window.devToolsExtension ? window.devToolsExtension() : f => f
      )
  );
  return store;
};
const getProStore = (initialState) => {
  const store = createStore(
        reducers,
        initialState,
    );

  return store;
};
export default process.env.NODE_ENV == 'development' ? getDevStore() : getProStore();
