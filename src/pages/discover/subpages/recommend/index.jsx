/* 发现音乐 - 推荐 */
import React, { memo } from 'react'
import { RecommendWrapper, Content, RecommendLeft, RecommendRight, } from './style';

//子组件
import TopBanner from './c-cpns/top-banner';
import HotRecommend from './c-cpns/hot-recommend';
import NewRecommend from './c-cpns/new-album'
import RecommendRaking from './c-cpns/recommend-raking';
function Recommend() {

    return (
        <RecommendWrapper>
            {/* 轮播图 */}
            <TopBanner />
            {/* 内容 */}
            <Content className="wrap-v2">
                {/* 左边内容区 */}
                <RecommendLeft>
                    {/* 热门推荐 */}
                    <HotRecommend />
                    {/* 新碟上架 */}
                    <NewRecommend />
                    {/* 推荐榜单 */}
                    <RecommendRaking />
                </RecommendLeft>
                {/* 右边导航栏 */}
                <RecommendRight>
                    right
                </RecommendRight>
            </Content>

        </RecommendWrapper>
    )
}
export default memo(Recommend);

//2、不使用redux hooks 使用connect mapDispatchToProps mapStateToProps
/*
import { connect } from 'react-redux'
 function Recommend(props) {
    const { getTopBanners, topBanners } = props;
    useEffect(() => {
        getTopBanners();
    }, [getTopBanners])

    return (
        <div>
            {
                topBanners.map((item, index) => {
                    return <a href={item.imageUrl} key={index}>{item.typeTitle}</a>
                })
            }
        </div>
    )
}
//将dispatch操作映射到组件props的函数
const mapDispatchToProps = (dispatch) => {
    return {
        //props中的请求轮播图函数
        getTopBanners: () => {
            dispatch(getTopBannersAction())
        }
    }
}
//将state的数据映射到组件props
const mapStateToProps = (state) => {
    return { topBanners: state.recommend.topBanners }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));

*/