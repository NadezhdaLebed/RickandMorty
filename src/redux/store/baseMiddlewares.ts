import thunk from 'redux-thunk';
import reduxPromiseMiddleware from 'redux-promise-middleware';

export default () => [thunk, reduxPromiseMiddleware];