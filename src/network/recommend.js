import request from "./request";

/* 轮播图数据 */
export function getTopBanners() {
    return request({
        url: "/banner"
    })
}