/* 首页发现音乐 - 推荐 -榜单 */
import React, { memo } from 'react'
//导入菜单
import ThemeHeaderRecommend from '@components/theme-header-recommend'
export default memo(function RecommendRaking() {
    return (
        <div>
            <ThemeHeaderRecommend title="榜单"></ThemeHeaderRecommend>
        </div>
    )
})
