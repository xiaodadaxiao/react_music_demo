import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import "./app-header.less";

/* antd */
import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';

/* 导入导航栏的数据 */
import { headerLinks } from '@common/local-data'

//判断返回NavLink还是a标签
const showSelectList = (item, index) => {
    //前三个使用navlink
    if (index < 3) {
        return <NavLink to={item.link}  >
            {item.title}
            <i className="sprite_01 icon"></i>
        </NavLink>
    } else {
        return <a href={item.link} target="_blank"
            rel="noopener noreferrer">{item.title}</a>
    }
}

export default memo(function AppHeader() {
    return (
        <div className="app-header">
            <div className="content wrap-v1">
                <div className="left">
                    {/* logo */}
                    <a href="#/" className="logo sprite_01" />
                    {/* 选择列表 发现音乐 我的音乐 朋友 */}
                    <div className="select-list">
                        {headerLinks.map((item, index) => {
                            return <div className="select-item" key={item.title}>{showSelectList(item, index)}</div>
                        })
                        }
                    </div>
                </div>
                <div className="right">
                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
                    <div className="center-btn">创作者中心</div>
                    <a className="login-btn">登录</a>
                </div>
            </div>
            {/* 底部红色分割线 */}
            <div className="divider" />
        </div>
    );
});
