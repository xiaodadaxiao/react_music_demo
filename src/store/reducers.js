//合并reducer 使用redux库的combineReducers
//import { combineReducers } from "redux";
//合并reducer 使用redux-immutable库的combineReducers
import { combineReducers } from 'redux-immutable'
/* 导入reducer */
import { reducer as recommendReducer } from '@pages/discover/subpages/recommend/store'
import { reducer as playerReducer } from '@pages/player/store'

//合并导出reduce
export default combineReducers({
    recommend: recommendReducer,
    player: playerReducer
})