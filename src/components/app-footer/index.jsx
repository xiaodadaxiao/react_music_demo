import React, { memo } from 'react'
import './app-footer.less'

/* 底部链接数据 */
import { footerLinks, footerImages } from '@common/local-data.js'


/* 全局app底部footer */
export default memo(function AppFooter() {
    return (
        <div className="app-footer">
            <div className="content wrap-v1">
                {/* 左侧链接 */}
                <div className="left">
                    <div className="left-top">
                        {
                            footerLinks.map((item, index) => {
                                return (
                                    <div className="link-item" key={item.link}>
                                        <a href={item.link} key={item.title}>{item.title}</a>
                                        <span>{index === 4 ? "" : "|"}</span>
                                    </div>)

                            })
                        }
                    </div>
                    <div className="left-bottom">
                        <p>
                            <span>网易公司版权所有©1997-2020</span>
                            <span>杭州乐读科技有限公司运营：</span>
                            <a
                                href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                浙网文[2018]3506-263号
                            </a>
                        </p>
                        <p>
                            <span>违法和不良信息举报电话：0571-89853516</span>
                            <span> 举报邮箱：</span>
                            <a href="ncm5990@163.com" target="_blank" rel="noopener noreferrer">
                                ncm5990@163.com
                            </a>
                        </p>
                        <p>
                            <span>粤B2-20090191-18</span>
                            <a
                                href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>工业和信息化部备案管理系统网站</span>
                            </a>
                            <a
                                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="policeLogo"></span><span>浙公网安备 33010902002564号</span>
                            </a>
                        </p>
                    </div>

                </div>
                {/* 右侧图片链接 */}
                <div className="right">
                    <ul className="right-ul">
                        {
                            footerImages.map((item) => {
                                return <li key={item.link} className="right-li">
                                    <a className="item" href={item.link} target="blank" rel="noopener noreferrer" />
                                    <span className="title"></span>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
})
