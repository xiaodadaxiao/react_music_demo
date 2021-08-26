import React, { memo } from 'react'
import { Wrapper, Left, Right } from "./style";
export default memo(function Player() {
    return (
        <Wrapper>
            <div className="content wrap-v2">
                <Left>
                    <h2>Song Info 歌曲信息...</h2>
                    <h2>Song Content</h2>
                </Left>
                <Right>
                    <h2>1 歌单0.0</h2>
                    <h2>2 Song 推荐</h2>
                    <h2>3 Download</h2>
                </Right>
            </div>
        </Wrapper>
    )
})
