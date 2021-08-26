/* 导入常量 */
import * as actionTypes from './contants'
//导入网络请求函数
import { getTopBanners, getHotRecommend, getNewAlbum, getTopList } from '@network/recommend';

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

//请求 热门推荐 的数据（异步action）
export const getHotRecommendAction = (limit) => {
    return (dispatch) => {
        //网络请求
        getHotRecommend(limit).then(res => {
            //修改数据
            dispatch(changeHotRecommendAction(res))
        })
    }
}
//修改 热门推荐 的数据
export const changeHotRecommendAction = (res) => {
    return {
        type: actionTypes.CHANGE_HOT_RECOMMEND,
        hotRecommends: res.result
    }
}

//请求 新碟上架 数据
export const getNewAlbumAction = (limit) => {
    return (dispatch) => {
        getNewAlbum(limit).then(res => {
            dispatch(changeNewAlbumAction(res));
        })
    }
}
//修改 新碟上架 数据
export const changeNewAlbumAction = (res) => {
    return {
        type: actionTypes.CHANGE_NEW_ALBUM,
        newAlbums: res.albums
    }
}

//请求 排行榜（3种idx） 数据
export const getTopListAction = (idx) => {
    return (dispatch) => {
        getTopList(idx).then(res => {

            switch (idx) {
                case 0:
                    dispatch(changeUpRankingAction(res));
                    break;
                case 2:
                    dispatch(changeNewRankingAction(res));
                    break;
                case 3:
                    dispatch(changeOriginRankingAction(res));
                    break;
                default:
                    break;
            }
        })
    }
}

//修改单个排行榜数据
//飙升榜
const changeUpRankingAction = (res) => ({
    type: actionTypes.CHANGE_UP_RANKING,
    upRanking: res.playlist,
});
//新歌榜
const changeNewRankingAction = (res) => ({
    type: actionTypes.CHANGE_NEW_RANKING,
    newRanking: res.playlist,
});
//原创榜
const changeOriginRankingAction = (res) => ({
    type: actionTypes.CHANGE_ORIGIN_RANKING,
    originRanking: res.playlist,
});
