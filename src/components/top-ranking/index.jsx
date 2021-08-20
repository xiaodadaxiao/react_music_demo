import React, { memo } from 'react'
import { useDispatch } from 'react-redux';

import { Wrapper } from "./style";

import {getSizeImage} from '@utils/format-utils'

export default memo(function TopRanking (props) {
    const dispatch =useDispatch();

    const { info, link } = props;
    const { tracks = [] } = info;
    return (
        <Wrapper>
        {/* 头部信息 */}
        <div className="header">
          <div className="image">
            <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
            <a href={link} className="image_cover"></a>
          </div>
  
          <div className="info">
            <a href={link}>
              <h3 className="name" title={info.name}>{info.name}</h3>
            </a>
            <div>
              <button className="btn play sprite_02"></button>
              <button className="btn favor sprite_02"></button>
            </div>
          </div>
        </div>
  
        {/* 榜单音乐列表 */}
        <div className="list">
          {tracks.slice(0, 10).map((item, index) => {
            return (
              <div className="list-item" key={item.id}>
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <a href={"/song?id=" + item.id} className="name text_nowrap" title={item.name}>
                    {item.name}
                  </a>
  
                  <div className="operate">
                    {/* 播放按钮 */}
                    <button
                      className="btn sprite_02 play"
                    //   onClick={(e) => dispatch(getSongDetailAction(item.id))}
                      title="播放"
                    ></button>
                    {/* 增加到播放列表按钮 */}
                    <button
                      className="btn sprite_icon2 addto"
                      title="增加到播放列表"
                      //onClick={(e) => dispatch(addSongtoListAction(item.id))}
                    ></button>
                    {/* 收藏按钮 */}
                    <button className="btn sprite_02 favor" title="收藏"></button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
  
        <div className="footer">
          <a href={link}>查看全部&gt;</a>
        </div>
      </Wrapper>
    )
})
