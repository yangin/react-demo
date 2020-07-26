import React from 'react'
import {BrowserRouter as Router, Route, Switch ,Redirect} from 'react-router-dom'
import { pages,set,desk } from './config'

import * as base from '../pages/base/' // 基础
import * as sysSet from '../pages/set' // 设置中心-系统设置
import * as menu from '../pages/menu' // 菜单

import App from '../pages/base/app'

// 注意，嵌套路由的Route不能加 exact,否则无法检测到子集
export default () => (
  <Router >
    <Switch>
      <Redirect exact to="/login" from="/" /> 
      <Route path={`/${pages}`} render={()=>
        <App>
          <Route path={`/${desk}/index`} component={base.example} />
          {/** *菜单 */}
          <Route path={`/${desk}/echarts`} component={menu.echarts} />
          <Route path={`/${desk}/editor`} component={menu.editor} />
          {/** *系统设置 */}
          <Route path={`/${set}/userManage`} component={sysSet.userManage} />
          <Route path={`/${set}/roleManage`} component={sysSet.roleManage} />
          <Route path={`/${set}/moduleManage`} component={sysSet.moduleManage} />
        </App>} />
      {/** *系统设置 */}
      <Route exact path="/login" component={base.login} />
      <Route path="*" component={base.notfound} />
    </Switch>
  </Router>
)