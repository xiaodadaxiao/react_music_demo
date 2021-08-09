import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

//路由配置文件
import routes from '@router';


import AppHeader from '@components/app-header';
import AppFooter from '@components/app-footer';
export default memo(function App() {
  return (

    < HashRouter >

      {/* hash router /# */}
      <AppHeader />
      {/* 路由渲染 */}
      {renderRoutes(routes)}
      < AppFooter />
    </HashRouter >
  )
})
