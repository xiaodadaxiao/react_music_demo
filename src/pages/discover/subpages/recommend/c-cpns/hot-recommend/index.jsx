/* 首页 -发现音乐- 推荐- 热门推荐组件 */
import React, { memo } from 'react'
import { HotRecommendWrapper } from './style'

/* 公共组件 菜单头部 */
import ThemeHeaderRecommend from '@components/theme-header-recommend'
export default memo(function HotRecommend() {
    return (
        <HotRecommendWrapper>
            {/* 菜单头部 */}
            <ThemeHeaderRecommend
                title="热门推荐"
                keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
                moreLink="/discover/playlist/"
            />

        </HotRecommendWrapper>
    )
})
