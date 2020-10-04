import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from '../reducer/mainReducer';

const store = createStore(mainReducer,{games:[]},applyMiddleware(thunk));

export default store;

