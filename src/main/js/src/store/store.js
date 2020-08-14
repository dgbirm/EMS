import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

//const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
 const store = createStore(
    combineReducers({

    }),
    // composeEnhancers(applyMiddleware(thunk))
 );

export default store;