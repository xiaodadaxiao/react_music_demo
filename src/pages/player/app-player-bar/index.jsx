/* 底部菜单栏播放器 */
import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Slider, message } from 'antd';
import { Wrapper, Control, PlayInfo, Operator } from './style';

import { getSizeImage, formatDate } from '@utils/format-utils';

import {
    getSongDetailAction, changeSequenceAction, changCurrentSongAction
    , changeCurrentLyricIndexAction
} from '../store/actionCreators';

export default memo(function AppPlayerBar() {

    //redux hooks
    const dispatch = useDispatch();

    const { currentSong, sequence, lyric, currentLyricIndex } = useSelector((state) => {
        return {
            currentSong: state.getIn(["player", "currentSong"]),
            sequence: state.getIn(["player", "sequence"]),
            lyric: state.getIn(["player", "lyric"]),
            currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
        }
    }, shallowEqual)
    //othors hooks
    const audioRef = useRef()
    // state data
    //当前播放的时间
    const [currentTime, setCurrentTime] = useState(0);
    //当前歌曲进度条
    const [progress, setProgress] = useState(0);
    //是否正在播放
    const [isPlaying, setIsPlaying] = useState(false);
    //是否正在手动改变进度
    const [isChanging, setIsChanging] = useState(false);
    //音量
    const [isShowVolume, setIsShowVolme] = useState(false);
    //请求歌曲信息
    useEffect(() => {
        dispatch(getSongDetailAction(1857630559));
    }, [dispatch])
    //改变歌曲播放器链接
    useEffect(() => {
        audioRef.current.src = `https://music.163.com/song/media/outer/url?id=${currentSong.id}.mp3`;
        //return;
        //播放
        audioRef.current.play().then(res => {
            setIsPlaying(true)
        }).catch(err => {
            setIsPlaying(false)//播放失败
        })
    }, [currentSong])

    /* other data */
    const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
    //歌手
    const artist = currentSong.ar || [];
    //总时长
    const duration = currentSong.dt || 0
    const showDuration = formatDate(new Date(duration), "mm:ss")

    /* handele */
    //播放音乐
    const playMusic = useCallback(() => {
        //未在播放
        if (!isPlaying) {
            //开始播放
            audioRef.current.play();
            setIsPlaying(true)
        } else {
            //停止播放
            audioRef.current.pause();
            setIsPlaying(false);
        }
    }, [isPlaying])
    //上一首 下一首
    const changeMusic = (tag) => {
        //-1上一首 1下一首
        dispatch(changCurrentSongAction(tag))
    }
    //音乐播放时间变化
    const timeUpdate = (e) => {
        let audioNowTime = e.target.currentTime;
        //正在手动滑动时，不改变进度
        //改变进度条 （0-100）
        if (!isChanging) {
            setCurrentTime(audioNowTime * 1000);
            setProgress(currentTime / duration * 100);
        }

        //获取当前时间的歌词
        let lyricIndex = 0
        for (; lyricIndex < lyric.length; lyricIndex++) {

            if (audioNowTime * 1000 < lyric[lyricIndex].time) {//获取下标
                break;
            }
        }
        //-1，变成上一句的下标（因为是小于lyricIndex，还没到）
        lyricIndex += -1;
        //修改redux中的currentLyricindex(重复不修改)
        if (lyricIndex !== currentLyricIndex) {
            //console.log(lyricIndex, lyric[lyricIndex] && lyric[lyricIndex].content);
            dispatch(changeCurrentLyricIndexAction(lyricIndex))
            //展示歌词
            const content = (lyric[lyricIndex] && lyric[lyricIndex].content) || ""
            message.open({
                key: "lyric",//key相同。不会重复弹多个窗口，只会替换文字
                content,
                duration: 0,//不会自动消失，
                className: 'lyric-class'
            })
        }

    }
    //进度条被改变
    const sliderChange = useCallback((value) => {
        //设置为正在手动改变进度，不让播放改变进度条
        setIsChanging(true)
        setProgress(value)
        //设置显示时间
        setCurrentTime(value / 100 * duration)
    }, [duration])
    //鼠标（滑动）离开进度条改变进度
    const sliderAfterChange = useCallback((value) => {
        //鼠标离开，改变歌曲时间(毫秒)
        audioRef.current.currentTime = value / 100 * duration / 1000;
        //当前展示的时间（秒）
        setCurrentTime(value / 100 * duration)
        //鼠标离开，设置手动改变 结束，让播放自动改变进度条
        setIsChanging(false)

        //鼠标离开，未在播放的话设置开始播放
        if (!isPlaying) {
            playMusic()
        }
    }, [duration, isPlaying, playMusic])
    //点击改变播放顺序模式
    const changeSequence = () => {
        //0-1-2-0 循环 随机 单曲
        let currentSequence = sequence + 1;
        if (currentSequence > 2) {
            currentSequence = 0
        }
        dispatch(changeSequenceAction(currentSequence));
    }
    //播放结束
    const handleMusicEnded = () => {
        //播放结束
        //单曲循环模式
        console.log("end", sequence);
        if (sequence === 2) {
            audioRef.current.currentTime = 0;//设置为0，从头开始
            audioRef.current.play();
        } else {
            //播放下一首
            changeMusic(1);
        }
    }

    //点击音量展示隐藏
    const clickVolumeShow = () => {
        setIsShowVolme(!isShowVolume)
    }
    //音量变化
    const volumeChange = (value) => {
        audioRef.current.volume = value / 100//(0-1)
    }


    return (

        <Wrapper className="sprite_playerbar">
            <div className="content wrap-v2">
                <Control isPlay={isPlaying}>
                    <button className="sprite_playerbar prev" onClick={e => changeMusic(-1)}></button>
                    <button className="sprite_playerbar play" onClick={e => playMusic()}></button>
                    <button className="sprite_playerbar next" onClick={e => changeMusic(1)}></button>
                </Control>
                <PlayInfo>
                    {/* 歌曲图片 */}
                    <div className="image">
                        <NavLink to="/discover/player">
                            <img src={getSizeImage(picUrl, 35)} alt="" />
                        </NavLink>
                    </div>
                    {/* 歌曲信息 */}
                    <div className="info">
                        {/* 歌手信息 */}
                        <div className="song">
                            <span className="song-name">{currentSong.name}</span>
                            {
                                artist.map((ar, index, array) => {
                                    return (<a href="#/" className="singer-name" key={ar.id}>{ar.name}<span>{array.length - 1 === index ? "" : "/"}</span></a>)
                                })
                            }

                        </div>
                        {/* 进度条 */}
                        <div className="progress">
                            <Slider className="slider"
                                tipFormatter={null}
                                value={progress}
                                onChange={sliderChange}
                                onAfterChange={sliderAfterChange}

                            />
                            {/* 时间 */}
                            <div className="time">
                                <span className="now-time">{formatDate(new Date(currentTime || 0), "mm:ss")}</span>
                                <span className="divider">/</span>
                                <span className="duration">{showDuration}</span>
                            </div>
                        </div>
                    </div>

                </PlayInfo>


                {/* 功能按钮区域 */}
                <Operator playMode={sequence} isShowVolume={isShowVolume}>
                    {/* 收藏、分享 按钮 */}
                    <div className="left">
                        {/* 收藏按钮 */}
                        <button className="sprite_playerbar btn favor"></button>
                        {/* 分享按钮 */}
                        <button className="sprite_playerbar btn share"></button>
                    </div>
                    {/* 音量播放选项 */}
                    <div className="right sprite_playerbar">
                        {/* 音量设置条 */}
                        <div className="volume sprite_playerbar">
                            <div className="slider">
                                <Slider
                                    vertical defaultValue={100}
                                    onChange={volumeChange}
                                />
                            </div>
                        </div>
                        {/* 音量按钮 */}
                        <button
                            className="sprite_playerbar btn icon-volume"
                            onClick={clickVolumeShow}
                        ></button>
                        {/* 循环 */}
                        <button
                            className="sprite_playerbar btn icon-loop"
                            onClick={changeSequence}
                        ></button>
                        {/* 播放列表 */}
                        <button className="sprite_playerbar btn icon-playlist">
                        </button>
                        {/* 歌词 */}
                        {/* <a href="" className="sprite_playerbar btn ">词</a> */}
                    </div>
                </Operator>
            </div>
            {/* 播放器 */}
            <audio ref={audioRef}
                onTimeUpdate={timeUpdate}
                //播放结束
                onEnded={handleMusicEnded}
            />
        </Wrapper>
    )
})
