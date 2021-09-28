import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';
import config from '../../config';
import getBaseMiddlewares from './baseMiddlewares';

const composeEnhancers =
  typeof window === 'object' &&
    window &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = () => {
  const middlewares = getBaseMiddlewares();
  if (!config.isProd && !config.isDisableReduxLogger) {
    middlewares.push(logger);
  }
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  return createStore(rootReducer, {}, enhancer);
};

export default configureStore;
