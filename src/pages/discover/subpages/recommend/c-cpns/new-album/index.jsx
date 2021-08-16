/* 首页发现音乐 - 推荐 -新碟上架 */
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getNewAlbumAction } from '@pages/discover/subpages/recommend/store/actionCreators'
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

    console.log(newAlbums);
    return (
        <div>
            <ThemeHeaderRecommend title="新碟上架" />
            <div>
                {
                    newAlbums.map((item) => {
                        return <li key={item.id}>{item.name}</li>
                    })
                }
            </div>
        </div>
    )
})
