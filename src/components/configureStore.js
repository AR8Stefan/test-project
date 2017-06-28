import Order from './App/Order.js'
import {
	createStore,
	applyMiddleware,
	compose
	} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const store = createStore(reducers, applyMiddleware(thunk));

// const store = () => {
// 	createStore('../reducers', applyMiddleware(thunk));
// };

export default (history) => {
  // let middlewares = [thunk]
  let store = createStore(reducers, applyMiddleware(thunk))
  return store
};

// export default compose(applyMiddleware(thunk))(createStore)(Order);
