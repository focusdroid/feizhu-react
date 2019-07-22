import React, { Component, Fragment } from 'react'
import {Link} from "react-router-dom";
import '../../planeTicket/planeFotterBar/planeBar.scss'

export default class HotelBar extends Component {
  render () {
    return(<Fragment>
      <footer>
        <div className='foot'>
          <ul className='foot-ul'>
            <li>
              <Link to='/hotel/hotelcollection'>
                <div className='foot-box'>
                  <img src="https://gw.alicdn.com/tfs/TB1owacFbGYBuNjy0FoXXciBFXa-96-96.png" alt=""/>
                  <p>我的收藏</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/hotel/hotelorder'>
                <div className='foot-box'>
                  <img src="https://gw.alicdn.com/tfs/TB1PlRzFgmTBuNjy1XbXXaMrVXa-96-96.png" alt=""/>
                  <p>我的订单</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/hotel/hoteltravel'>
                <div className='foot-box'>
                  <img src="https://gw.alicdn.com/tfs/TB1_V9FFh9YBuNjy0FfXXXIsVXa-96-96.png" alt=""/>
                  <p>飞猪旅行</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </Fragment>);
  }
}
