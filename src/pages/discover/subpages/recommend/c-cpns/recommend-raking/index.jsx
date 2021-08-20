/* 首页发现音乐 - 推荐 -榜单 */
import React, { memo, useEffect } from 'react'
import { useDispatch,useSelector ,shallowEqual} from 'react-redux';
import {RecommendRandingWrapper} from './style'
//导入菜单
import ThemeHeaderRecommend from '@components/theme-header-recommend'
import TopRanking from '@components/top-ranking'; 

import {getTopListAction} from '@pages/discover/subpages/recommend/store/actionCreators'



export default memo(function RecommendRaking() {
    //redux hooks 
    const dispatch =useDispatch();
    //获得三个榜单数据
    const {upRanking, newRanking, originRanking}=useSelector((state)=>{
        return{
            upRanking: state.getIn(["recommend", "upRanking"]),
            newRanking: state.getIn(["recommend", "newRanking"]),
            originRanking: state.getIn(["recommend", "originRanking"]),
        }
    },shallowEqual)
    //other hooks
    useEffect(()=>{
        //请求排行榜数据
        dispatch(getTopListAction(0))
        dispatch(getTopListAction(2))
        dispatch(getTopListAction(3))
    },[dispatch])
    
    return (
        <RecommendRandingWrapper>
            <ThemeHeaderRecommend title="榜单"></ThemeHeaderRecommend>
            <div className="tops">
                {/* 三个榜单组件 */}
                <TopRanking info={originRanking} link={`/discover/toplist?id=19723756`} />
                <TopRanking info={upRanking} link={`/discover/toplist?id=3779629`} />
                <TopRanking info={newRanking} link={`/discover/toplist?id=2884035`}/>
            </div>
        </RecommendRandingWrapper>
    )
})
