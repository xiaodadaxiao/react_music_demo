/* 首页发现音乐 - 推荐 -新碟上架 */
import React, { memo } from 'react'
//导入菜单
import ThemeHeaderRecommend from '@components/theme-header-recommend'
export default memo(function NewAlbum() {
    return (
        <div>
            <ThemeHeaderRecommend title="新碟上架"></ThemeHeaderRecommend>
        </div>
    )
})
