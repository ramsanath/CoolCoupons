import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers/index';
import thunk from 'redux-thunk';


export default store = createStore(appReducer, undefined, applyMiddleware(thunk));
