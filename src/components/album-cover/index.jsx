// 新碟组件
import React,{memo} from 'react'
import { Wrapper} from './style'
import {getSizeImage} from '@utils/format-utils';
export default memo(function AlbumCover (props){
    //解构参数
    const {info,size=130,width=153,bgp = "-845px", link = "" } =props
    return (
        <Wrapper siez={size} width={width} bgp={bgp}>
            {/* 上半部分圖片 */}
            <div className="album-image">
                <img src={getSizeImage(info.picUrl,size)} alt="" />
                <a href={link} className="img_cover cover"></a>
            </div>
            {/* 下半部分文字 */}
            <div className="album-info">
                <div className="name">{info.name}</div>
                <div className="artist">{info.artist.name}</div>
            </div>
        </Wrapper>
    )
})

