//网络请求
import { getSongDetail } from '@network/player'

import * as actionTypes from './contants';
//请求歌曲详情
export const getSongDetailAction = (ids) => {
    return (dispatch) => {
        getSongDetail(ids).then(res => {
            console.log("song detial", res);
            dispatch(changeSongDetailAction(res))
        })
    }
}
//修改歌曲详情
export const changeSongDetailAction = (res) => {
    return {
        type: actionTypes.CHANGE_CURRENT_SONG,
        currentSong: res.songs[0]
    }
}