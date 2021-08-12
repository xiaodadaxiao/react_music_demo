/* 导入常量 */
import * as actionTypes from './contants'
//导入网络请求函数
import { getTopBanners } from '@network/recommend';

//异步action 请求推荐页面的轮播图数据
export const getTopBannersAction = () => {

    //返回的action，是函数，异步请求网络数据
    return (dispatch) => {
        //网络请求
        getTopBanners().then(res => {
            //修改redux数据
            dispatch(changeTopBannersAction(res))
        })
    }
}
//修改推荐页面轮播图的数据( 通过异步action dispatch后，请求到的数据传到这里再次修改数据)
export const changeTopBannersAction = (res) => {
    return {
        type: actionTypes.CHANGE_TOP_BANNERS,
        topBanners: res.banners
    }
}


