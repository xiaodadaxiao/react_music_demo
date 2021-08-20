import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
//redux
import store from './store'
import { Provider } from 'react-redux';

//路由配置文件
import routes from '@router';

//组件
import AppHeader from '@components/app-header';
import AppFooter from '@components/app-footer';
import AppPlayerBar from '@pages/player/app-player-bar';
export default memo(function App() {
  return (
    <Provider store={store}>
      < HashRouter >
        {/* hash router /# */}
        <AppHeader ></AppHeader>
        {/* 路由渲染 */}
        {renderRoutes(routes)}
        < AppFooter ></AppFooter>
        {/* 播放栏 */}
        <AppPlayerBar></AppPlayerBar>
      </HashRouter >
    </Provider>
  )
})
