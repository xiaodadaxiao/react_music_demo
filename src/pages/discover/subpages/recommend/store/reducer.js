/* discover - recommend 首页 发现音乐 推荐 */

//immutable
import { Map } from 'immutable'
//导入常量
import * as actionTypes from './contants'

//默认初始数据 使用immutable js Map 处理
const defaultState = Map({
    //顶部轮播图数据
    topBanners: [],
    //热门推荐数据
    hotRecommends: [],
    //新碟上架
    newAlbums: []
})

/*
 // 一般方法 ：默认初始数据
const defaultState = {
    //顶部轮播图数据
    topBanners: []
} 
*/
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        //修改轮播图数据
        case actionTypes.CHANGE_TOP_BANNERS:
            //使用immutable set 处理数据提高性能：
            return state.set("topBanners", action.topBanners)
        //一般方法使用:(使用内存消耗大，性能差)
        //return {...state,topBanners:action.topBanners}

        //修改热门推荐数据
        case actionTypes.CHANGE_HOT_RECOMMEND:
            return state.set("hotRecommends", action.hotRecommends)
        //修改 新碟上架数据
        case actionTypes.CHANGE_NEW_ALBUM:
            return state.set("newAlbums", action.newAlbums)
        default:
            return state
    }
}