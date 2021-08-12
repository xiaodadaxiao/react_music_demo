import React, { memo } from 'react'
import { Wrapper, Mentu } from './style'
import { renderRoutes } from 'react-router-config';
/* 菜单标题 */
import { dicoverMenu } from '@common/local-data.js';
import { NavLink } from 'react-router-dom';
/* 发现音乐界面 */
export default memo(function Discover(props) {
    return (
        <Wrapper>
            {/* 发现音乐 导航菜单 */}
            <Mentu className="">
                <div className="center wrap-v2">
                    {
                        dicoverMenu.map((item) => {
                            return <div className="item" key={item.title}>
                                <NavLink to={item.link}>{item.title}</NavLink>
                            </div>
                        })
                    }
                </div>

            </Mentu>
            {/* 渲染路由 */}
            {renderRoutes(props.route.routes)}
        </Wrapper>
    )
})
