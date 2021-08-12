/* 发现音乐-推荐 页面 菜单头部 公共组件 */
import React, { memo } from 'react'

import { HeaderWrapper } from './style'
export default memo(function ThemeHeaderRecommend(props) {
    const { title, keywords = [], moreLink } = props
    return (
        <HeaderWrapper className="sprite_02">
            {/* 菜单左边大标题 */}
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keyword">
                    {
                        keywords.map((item, index, arr) => {
                            return (
                                <div className="item" key={item}>
                                    <a href={`/discover/playlist/?cat=${item}`}>{item}</a>
                                    <span className="divider">{index === arr.length - 1 ? "" : "|"}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* 菜单右边 更多按钮  */}
            <div className="right">
                <a href={moreLink}>更多</a>
                <i className="icon sprite_02"></i>
            </div>
        </HeaderWrapper>
    )
})
