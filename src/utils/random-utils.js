
//得到随机播放的下标（既不超出列表下标，也不与当前下标重复）
export const randomSongIndex = (nowIndex, maxIndex) => {

    //只有一首
    if (maxIndex === 0 && nowIndex === 0) {
        return nowIndex;
    }
    let index = nowIndex;
    while (index === nowIndex) {
        index = Math.floor(Math.random() * (maxIndex - 0 + 1)) + 0; //0 ~ maxIndex
    }
    return index
}