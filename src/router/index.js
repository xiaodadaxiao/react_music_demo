/* 路由配置文件 */

import Discover from '@pages/discover'
import Mine from '@pages/mine'
import Friend from '@pages/friend'


const routes = [
    {
        path: '/',
        exact: true,
        component: Discover
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