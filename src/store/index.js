//redux 
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from 'redux-thunk';
//导入合并好的reducer
import reducers from './reducers';

//配合Redux-Devtools 插件 配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//创建store

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(reduxThunk)
));

export default store;