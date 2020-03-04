import { createStore, applyMiddleware, compose } from "redux";
import reducer from './Reducers/Todo'

import loggingMiddleware from './Middleware/log.middleware'
import apiMiddleware from './Middleware/api.middleware'

const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(loggingMiddleware, apiMiddleware)
)


export const store = createStore(reducer, enhancer);
