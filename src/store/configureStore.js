import rootReducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';

import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

export default initialState => {
  const logger = createLogger();

  // Build the middleware for intercepting and dispatching navigation actions
  const middleware = routerMiddleware(browserHistory);

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger, middleware)
  );
}