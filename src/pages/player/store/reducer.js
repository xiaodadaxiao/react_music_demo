import { Map } from "immutable";

import * as actionTypes from './contants'

//使用immutable js 转成 Map
const defaultState = Map({
    //当前选中（播放）歌曲
    currentSong: {}
})
export default function (state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.currentSong)
        default:
            return state
    }
}