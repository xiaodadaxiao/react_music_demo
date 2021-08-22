//播放相关的网络请求
import request from './request'


//请求单个歌曲详情
export function getSongDetail(ids) {
    return request({
        url: '/song/detail',
        params: {
            ids
        }
    })
}