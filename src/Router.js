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
import ContentFeiZhu from './view/planeTicket/concatfeizhu/ContentFeiZhu' // 机票/联系飞猪
import Collection from './view/planeTicket/collection/Collection' // 机票/ 我的收藏
import MyOrder from './view/planeTicket/myorder/MyOrder' // 机票/ 我的订单
/*机票end*/
/*酒店start*/
import Hotel from './view/hotel/Hotel'
import HotelCollection from './view/hotel/hotelCollection/HotelCollection'
import HotelOrder from './view/hotel/hotelOrder/HotelOrder'
import HotelTravel from './view/hotel/hotelTravel/HotelTravel'
/*酒店end*/
/*火车票start*/
import TrainTickets from './view/train/TrainTickets'
/*火车票end*/

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
                <Route path='/planeticket/contentfeizhu' component={ContentFeiZhu}></Route>
                <Route path='/planeticket/collection' component={Collection}></Route>
                <Route path='/planeticket/myorder' component={MyOrder}></Route>
              </PlaneTicket>
            }></Route>
            <Route path='/hotel' component={Hotel} children={() =>
              <Hotel>
                <Route path='/hotel/hotelcollection' component={HotelCollection}></Route>
                <Route path='/hotel/hotelorder' component={HotelOrder}></Route>
                <Route path='/hotel/hoteltravel' component={HotelTravel}></Route>
              </Hotel>
            }></Route>
            <Route path='/traintickets' component={TrainTickets} children={() =>
              <TrainTickets>

              </TrainTickets>
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
