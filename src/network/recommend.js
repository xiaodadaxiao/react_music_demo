import request from "./request";

/* 轮播图数据 */
export function getTopBanners() {
    return request({
        url: "/banner"
    })
}

/* 热门推荐数据 */
export function getHotRecommend(limit) {
    return request({
        url: "/personalized",
        params: {
            limit
        }
    })
}

/* 新碟上架 数据 */
export function getNewAlbum(limit) {
    return request({
        url: "/top/album",
        params: {
            limit
        }
    })
}