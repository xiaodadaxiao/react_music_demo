/* 顶部轮播图 */
import React, { memo, useEffect, useState, useRef, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Carousel } from 'antd'

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'

import { getTopBannersAction } from '@pages/discover/subpages/recommend/store/actionCreators'

import { getSizeImage } from "@/utils/format-utils";

export default memo(function TopBanner() {

    //选中的轮播图的下标
    const [currentIndex, setCurrentIndex] = useState(0);

    // 组件和redux关联，获取数据和操作
    const { topBanners } = useSelector(
        state => ({
            topBanners: state.get("recommend").get("topBanners")
        }),
        shallowEqual
    );
    const dispatch = useDispatch();


    // 其他hooks

    const beforeChange = useCallback((from, to) => {
        setTimeout(() => {
            //修改背景高斯模糊的图片为轮播图同步的图片
            setCurrentIndex(to);
        }, 0);
    }, []);

    //网络请求 轮播图数据
    useEffect(() => {
        dispatch(getTopBannersAction())
    }, [dispatch])

    const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl;

    const bannerRef = useRef(null);

    return (
        <BannerWrapper bgImage={bgImage}>
            <div className="banner wrap-v2">
                {/* 轮播图左侧图片 */}
                <BannerLeft>

                    <Carousel ref={bannerRef} effect="fade" autoplay="true" beforeChange={beforeChange}>
                        {topBanners.map((item, index) => {
                            const url = item.url || `/song?id=${item.encodeId}`;
                            return (
                                <div className="banner-item" key={item.imageUrl}>
                                    <a href={url} target={item.url ? "blank" : ""}>
                                        <img
                                            className="image"
                                            src={getSizeImage(item.imageUrl, 730)}
                                            alt={item.typeTitle}
                                        />
                                    </a>
                                </div>
                            );
                        })}
                    </Carousel>

                </BannerLeft>
                {/* 轮播图右侧下载按钮 */}
                <BannerRight>
                    <div className="download">
                        <a className="btn-down" href="https://music.163.com/download"></a>
                        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                    </div>
                </BannerRight>
                {/* 左右切换按钮 */}
                <BannerControl>
                    <button className="btn left" onClick={(e) => bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={(e) => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})
