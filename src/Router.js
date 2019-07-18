import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App' // 单纯的容器组件
import Admin from './components/Admin' // 首尾的容器
import Home from './components/footerBarRouter/homePage/Home' // 首页
import Find from './components/footerBarRouter/find/Find' // 发现
import Target from './components/footerBarRouter/target/Target' // 目的地
import Trip from './components/footerBarRouter/trip/Trip' // 行程页面
import Me from './components/footerBarRouter/me/Me' // 我的页面

import NotLoggedSearch from './page/notLoggedSearch/NotLoggedSearch' // 未登录和登录时候首页的搜多页面

import Carousels from './plugin/carousel/Carousel' // 轮播图案例

/*机票start*/
import PlaneTicket from './view/planeTicket/PlaneTicket' // 机票部门的容器
import PlaneTicketFirst from './view/planeTicket/planeTicketFirst/PlaneTicketFirst'
import Test from './view/planeTicket/planeTicketFirst/Test'
/*机票end*/

export default class Routers extends Component{
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path='/carousel' component={Carousels}></Route>
            <Route path='/notLoggedSearch' component={NotLoggedSearch}></Route>
            <Route path='/planeticket' component={PlaneTicket} children={() =>
              <PlaneTicket>
                <Route path='/planeticket/test' component={Test}></Route>
              </PlaneTicket>
            }></Route>
            <Route render={() =>
              <Admin>
                <Route exact path='/' component={Home}></Route>
                <Route path='/find' component={Find}></Route>
                <Route path='/target' component={Target}></Route>
                <Route path='/trip' component={Trip}></Route>
                <Route path='/me' component={Me}></Route>
              </Admin>
            }></Route>
          </Switch>
        </App>

      </Router>
    );
  }
}
