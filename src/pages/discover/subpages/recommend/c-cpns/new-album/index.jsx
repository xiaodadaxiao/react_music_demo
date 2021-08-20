/* 首页发现音乐 - 推荐 -新碟上架 */
import React, { memo, useEffect,useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {Carousel} from 'antd'
import { getNewAlbumAction } from '@pages/discover/subpages/recommend/store/actionCreators'
import { NewAlbumWrapper } from "./style";

import AlbumCover from "@components/album-cover" ;
//导入菜单
import ThemeHeaderRecommend from '@components/theme-header-recommend'
export default memo(function NewAlbum() {
    //redux hooks
    const dispatch = useDispatch();
    const { newAlbums } = useSelector((state) => ({
        // newAlbums:state.get("recommend").get("newAlbums");
        newAlbums: state.getIn(["recommend", "newAlbums"])
    }), shallowEqual)
    //网络请求
    useEffect(() => {
        dispatch(getNewAlbumAction(10))
    }, [dispatch])

    const pageRef = useRef();
    console.log(newAlbums);
    return (
        <div>
            <ThemeHeaderRecommend title="新碟上架" />
            <NewAlbumWrapper>
                <div className="content">
                    {/* 左按钮 */}
                    <button className="arrow arrow-left sprite_02"
                             onClick={(e) => pageRef.current.prev()} />
                    {/* 中间展示内容（轮播） */}
                    <div className="album">
                        <Carousel ref={pageRef} dots={false}>
                              {
                                //   切成两个页面
                                  [0,1].map(item=>{
                                      return(
                                        <div className="page" key={item}>
                                          {       
                                            //item：0或1，切割成1-5 或 6-10一组 ，渲染成两页
                                            newAlbums.slice(item*5,(item+1)*5)
                                            .map(itemChild=>{
                                                return (
                                                 <AlbumCover  
                                                    key={itemChild.id}
                                                    info={itemChild}
                                                    title={itemChild.name}
                                                    size={100}
                                                    width={118}
                                                    bgp="-570px"
                                                    link={`/album?id=${itemChild.id}`}
                                                 />)
                                            })
                                          }
                                        </div>)
                                  })
                              }
                        </Carousel>
                    </div>
                    {/* 右按钮 */}
                    <button  className="arrow arrow-right sprite_02"  onClick={(e) => pageRef.current.next()} />
                </div>
            </NewAlbumWrapper>
        </div>
    )
})
