import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas';

const initStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'Holly Instance',
      }) : compose;
  /* eslint-enable no-underscore-dangle */

  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
      ),
    ),
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default initStore();
