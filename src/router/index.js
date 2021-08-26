/* 路由配置文件 */
import { Redirect } from 'react-router-dom'
import { lazy } from 'react'

/* 顶部组件 发现音乐，朋友，我的 */
/* import Discover from '@pages/discover'
import Mine from '@pages/mine'
import Friend from '@pages/friend' */
/* 路由懒加载 */
const Discover = lazy(() => import('@pages/discover'))
const Mine = lazy(() => import('@pages/mine'))
const Friend = lazy(() => import('@pages/friend'))

/* 发现音乐子组件  */
/* import Recommend from '@pages/discover/subpages/recommend'
import TopList from '@pages/discover/subpages/toplist';
import PlayList from '@pages/discover/subpages/palylist';
import DjRadio from '@pages/discover/subpages/djradio';
import Artist from '@pages/discover/subpages/artist';
import Album from '@pages/discover/subpages/album'; */
const Recommend = lazy(() => import('@pages/discover/subpages/recommend'))
const TopList = lazy(() => import('@pages/discover/subpages/toplist'))
const PlayList = lazy(() => import('@pages/discover/subpages/palylist'))
const DjRadio = lazy(() => import('@pages/discover/subpages/djradio'))
const Artist = lazy(() => import('@pages/discover/subpages/artist'))
const Album = lazy(() => import('@pages/discover/subpages/album'))
//播放音乐详情页面（discover）
//import Player from '@/pages/player'
const Player = lazy(() => import('@pages/player'))

const routes = [
    {
        path: '/',
        exact: true,
        /* 重定向到discover */
        render: () => (<Redirect to="/discover" />)

    },
    {
        path: '/discover',
        component: Discover,
        /* 子路由 */
        routes: [
            {
                /* 默认跳转到推荐页面 */
                path: '/discover',
                exact: true,
                render: () => (<Redirect to="/discover/recommend" />)
            },
            {
                //推荐
                path: '/discover/recommend',
                component: Recommend
            },
            {
                //排行榜
                path: "/discover/toplist",
                component: TopList
            },
            {
                //歌单
                path: "/discover/playlist",
                component: PlayList
            },
            {
                //主播电台
                path: "/discover/djradio",
                component: DjRadio
            },
            {
                //歌手
                path: "/discover/artist",
                component: Artist
            },
            {
                //新碟上架
                path: "/discover/album",
                component: Album
            }, {
                //播放音乐页面
                paht: '/discover/palyer',
                component: Player
            }
        ]
    },
    {
        path: '/mine',
        component: Mine
    },
    {
        path: '/friend',
        component: Friend
    }
]

export default routes;