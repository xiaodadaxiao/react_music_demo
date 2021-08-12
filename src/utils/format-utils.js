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