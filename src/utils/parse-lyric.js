//处理歌词字符串
/* 
[00:25.189]是的我看见到处是阳光
[00:29.156]快乐在城市上空飘扬
[00:32.773]新世界来得像梦一样
[00:36.689]让我暖洋洋
[00:40.122]你的老怀表还在转吗
[00:43.822]你的旧皮鞋还能穿吗
[00:47.506]这儿有一支未来牌香烟
[00:51.479]你不想尝尝吗
*/
// 使用正则表达式获取时间
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;//[00:51.479]
export function parseLyric(lyricStr) {
    let lyric = []
    const lineStrings = lyricStr.split("\n");
    for (let line of lineStrings) {
        const result = parseExp.exec(line)
        //console.log(result);
        if (!result) continue;
        //时间变成毫秒

        const time1 = result[1] * 60 * 1000; // 分钟变毫秒
        const time2 = result[2] * 1000;//秒钟变毫秒
        const time3 = result[3].length === 2 ? result[3] * 10 : result[3] * 1;//两位的话变三位
        const time = time1 + time2 + time3;
        // 歌词
        const content = line.replace(parseExp, "").trim();//将时间去掉
        lyric.push({ time, content });
    }

    return lyric;
}