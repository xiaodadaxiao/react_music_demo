/** 将指定数字转为 n万、n亿 形式
 *
 * @param {Number} count 数字
 * @return {String} 返回的字符串
 */
export function getCount(count) {
    if (count < 0) return;
    if (count < 10000) {
        return count;
    } else if (Math.floor(count / 10000) < 10000) {
        return Math.floor(count / 1000) / 10 + "万";
    } else {
        return Math.floor(count / 10000000) / 10 + "亿";
    }
}



/** 将指定的图片地址转换为指定大小的图片地址
 * @param {String} imgUrl 图片地址
 * @param {Number} size 图片大小
 * @return {String} 返回的图片地址
 */
export function getSizeImage(imgUrl, size, height) {
    if (!height) {
        return `${imgUrl}?param=${size}x${size}`;
    } else {
        return `${imgUrl}?param=${size}y${height}`;
    }
}

/**
 * 格式化时间
 * @param {Date} date 时间
 * @param {String} fmt 需要格式化的格式
 */
export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    let o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + "";
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
        }
    }
    return fmt;
}
function padLeftZero(str) {
    return ("00" + str).substr(str.length);
}