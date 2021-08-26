import { Map } from "immutable";

import * as actionTypes from './contants'

//使用immutable js 转成 Map
const defaultState = Map({
    //播放列表
    playList: [],
    //播放歌曲 在列表中的下标
    currentSongIndex: 0,
    //当前选中（播放）歌曲信息
    currentSong: {},
    //播放顺序模式（0-1-2-0 循环 随机 单曲）
    sequence: 0,
    //歌词
    lyric: [],
    //当前播放的歌词下标
    currentLyricIndex: 0
})
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.currentSong)
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set("playList", action.playList)
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex", action.currentSongIndex)
        case actionTypes.CHANGE_SEQUENCE:
            return state.set("sequence", action.sequence)
        case actionTypes.CHANGE_LYRIC:
            return state.set("lyric", action.lyric)
        case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
            return state.set("currentLyricIndex", action.currentLyricIndex)
        default:
            return state
    }
}