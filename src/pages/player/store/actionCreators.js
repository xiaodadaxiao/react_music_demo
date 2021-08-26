//网络请求
import { getSongDetail, getLyric } from '@network/player'
//生成随机index
import { randomSongIndex } from '@utils/random-utils';
import { parseLyric } from '@utils/parse-lyric';
import * as actionTypes from './contants';
//请求歌曲详情
export const getSongDetailAction = (ids) => {
    return (dispatch, getState) => {
        //判断该歌曲是否在歌单playlist中
        const playList = getState().getIn(["player", "playList"]);
        const songIndex = playList.findIndex((song) => song.id === ids);
        if (songIndex !== -1) {//找到
            //修改下标和选中歌曲
            dispatch(changeCurrentSongIndexAction(songIndex));
            dispatch(changeSongDetailAction(playList[songIndex]));
            //请求该歌曲的歌词
            dispatch(getLyricAction(ids))
        } else {//没有在当前歌单找到
            //请求该歌曲数据
            getSongDetail(ids).then(res => {
                //console.log("song detial", res);
                const newSong = res.songs && res.songs[0];
                //修改选中歌曲
                if (!newSong) return;
                //添加新歌曲到播放列表
                const newPlayList = [...playList];
                newPlayList.push(newSong)
                //修改播放列表
                dispatch(changePlayListAction(newPlayList))
                //修改选中歌曲下标为刚刚添加的歌曲
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
                //修改为当前歌曲
                dispatch(changeSongDetailAction(res.songs && res.songs[0]));
                //请求该歌曲的歌词
                dispatch(getLyricAction(ids))
            })
        }

    }
}
//修改歌曲详情
export const changeSongDetailAction = (currentSong) => {
    return {
        type: actionTypes.CHANGE_CURRENT_SONG,
        currentSong
    }
}

//修改歌曲列表
export const changePlayListAction = (playList) => {
    return {
        type: actionTypes.CHANGE_PLAY_LIST,
        playList
    }
}
//修改选中歌曲的下标（在播放列表中）
export const changeCurrentSongIndexAction = (currentSongIndex) => {
    return {
        type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
        currentSongIndex
    }
}
//修改播放顺序模式
export const changeSequenceAction = (sequence) => {
    return {
        type: actionTypes.CHANGE_SEQUENCE,
        sequence
    }
}
//修改选中歌曲（上一首 下一首）
export const changCurrentSongAction = (tag) => {
    //tag===1：上一首， tag==-1： 下一首
    return (dispatch, getState) => {
        //播放模式
        const sequence = getState().getIn(["player", "sequence"])
        let currentSongIndex = getState().getIn(["player", "currentSongIndex"])
        const playList = getState().getIn(["player", "playList"])
        //根据 播放模式设置 下一首歌
        switch (sequence) {
            case 1://随机播放
                currentSongIndex = randomSongIndex(currentSongIndex, playList.length - 1);
                //console.log("随机下标", currentSongIndex);
                break;
            default://单曲播放和顺序播放（这两个点击上/下一首是一样的）
                currentSongIndex += tag;
                if (currentSongIndex >= playList.length) currentSongIndex = 0;//超出下标 变第一首
                if (currentSongIndex < 0) currentSongIndex = playList.length - 1;//第一首变最后一首
            //console.log("currentSongIndex", currentSongIndex);
        }
        //根据下标修改歌曲 、 下标
        dispatch(changeSongDetailAction(playList[currentSongIndex]));
        console.log(playList[currentSongIndex], "song");
        dispatch(changeCurrentSongIndexAction(currentSongIndex));
        //请求该歌曲的歌词
        dispatch(getLyricAction(playList[currentSongIndex].id))
    }
}
//请求歌词
export const getLyricAction = (id) => {
    //console.log(id);
    return dispatch => {
        //网络请求
        getLyric(id).then(res => {
            //解析歌词
            const lyricInfo = parseLyric(res.lrc.lyric);
            //console.log(lyricInfo);
            //修改歌词
            dispatch(changeLyricAction(lyricInfo))
        })
    }
}
//修改歌词信息
export const changeLyricAction = (lyric) => {
    return {
        type: actionTypes.CHANGE_LYRIC,
        lyric
    }
}
//修改当前歌词下标
export const changeCurrentLyricIndexAction = (currentLyricIndex) => {
    return {
        type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
        currentLyricIndex
    }
}