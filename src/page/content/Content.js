import React, { Component, Fragment } from 'react'
import './content.scss'
import '../../style/css/base.css'
import { Link } from 'react-router-dom'

export default class Content extends Component{
  render(){
    return(
      <Fragment>
        <div className='mt30 content'>
          {/*链接票务代售start*/}
          <div>
            <ul className='disflex content-ul'>
              <li>
                <Link to='/'>
                  <img src="//gw.alicdn.com/tfs/TB1JCcHCqmWBuNjy1XaXXXCbXXa-210-126.png_110x10000.jpg_.webp" alt=""/>
                  <p>机票</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <img src="//gw.alicdn.com/tfs/TB1s51ECuOSBuNjy0FdXXbDnVXa-210-126.png_110x10000.jpg_.webp" alt=""/>
                  <p>酒店</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <img src="//gw.alicdn.com/tfs/TB1BNE_wrZnBKNjSZFrXXaRLFXa-210-126.png_110x10000.jpg_.webp" alt=""/>
                  <p>火车票</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <img src="//gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp" alt=""/>
                  <p>汽车票</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <img src="//gw.alicdn.com/tfs/TB1aJ4MwHArBKNjSZFLXXc_dVXa-210-126.png_110x10000.jpg_.webp" alt=""/>
                  <p>门票</p>
                </Link>
              </li>
            </ul>
          </div>
          {/*链接票务代售end*/}
        {/*  旅游签证周边游start*/}
          <div className='travel'>
            <div>
              <ul>
                <li>
                  <Link to='/'></Link>
                </li>
              </ul>
            </div>
          </div>
        {/*  旅游签证周边游end*/}
        </div>
      </Fragment>
    );
  }
}
