import { createStore, applyMiddleware } from "redux";
import reducer from './Reducers/Todo'

import loggingMiddleware from './Middleware/log.middleware'
import apiMiddleware from './Middleware/api.middleware'

export const store = createStore(reducer, applyMiddleware(loggingMiddleware, apiMiddleware));
