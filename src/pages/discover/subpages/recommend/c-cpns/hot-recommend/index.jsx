/* 首页 -发现音乐- 推荐- 热门推荐组件 */
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HotRecommendWrapper } from './style'
import { getHotRecommendAction } from '@pages/discover/subpages/recommend/store/actionCreators'
import SongCover from '@components/song-cover'
/* 公共组件 菜单头部 */
import ThemeHeaderRecommend from '@components/theme-header-recommend'
export default memo(function HotRecommend() {

    //redux hooks
    const dispatch = useDispatch();
    const { hotRecommends } = useSelector(state => {
        return {
            hotRecommends: state.get("recommend").get("hotRecommends")
        }
    })
    //请求热门推荐的数据
    useEffect(() => {
        //8条数据
        dispatch(getHotRecommendAction(8))
    }, [dispatch])



    return (
        <HotRecommendWrapper>
            {/* 菜单头部 */}
            <ThemeHeaderRecommend
                title="热门推荐"
                keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
                moreLink="/discover/playlist/"
            />


            {/* 展示内容 */}
            <div className="recommend-list">
                {hotRecommends.map((item) => {
                    return (<SongCover key={item.id} info={item} />)
                })
                }
            </div>



        </HotRecommendWrapper>
    )
})
