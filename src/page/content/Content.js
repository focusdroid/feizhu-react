import React, { Component, Fragment } from 'react'
import './content.scss'
import '../../style/css/base.css'
import { Link } from 'react-router-dom'

export default class Content extends Component{
  render(){
    return (
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
            <div className='travel-parent-ul'>
              <ul className='travel-ul'>
                <li>
                  <Link to='/'>
                    <p>出境游</p>
                    <p>走遍全球</p>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <p>境内游</p>
                    <p className='line'>狂野西部</p>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <p>周边游</p>
                    <p>乐享周末</p>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <p>飞猪购</p>
                    <p>免税预购</p>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <p>签证/签注</p>
                    <p>在线办理</p>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <p>境外上网</p>
                    <p>信用免押</p>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <p>用车</p>
                    <p>接送9折</p>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <p>全部</p>
                    <p>更多推荐</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/*  旅游签证周边游end*/}
        </div>
        {/*每日签到start*/}
        <div className='sign-parent'>
          <div className='sign disflex'>
            <div className='disflex'>
              <img className='sign-img-one' src="https://gw.alicdn.com/tfs/TB1JMPzOsbpK1RjSZFyXXX_qFXa-239-76.png_110x10000.jpg_.webp" alt=""/>
              <p>专属福利天天领</p>
            </div>
            <div className='vertical'></div>
            <div className='disflex'>
              <img className='sign-img-two' src="https://gw.alicdn.com/tfs/TB17LZBCb9YBuNjy0FgXXcxcXXa-224-100.png_110x10000.jpg_.webp" alt=""/>
              <p>每日签到</p>
            </div>
          </div>
        </div>
        {/*每日签到end*/}
      </Fragment>
    );
  }
}
