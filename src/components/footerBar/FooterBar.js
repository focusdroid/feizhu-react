import React, { Component, Fragment } from 'react'
import './footerBar.scss'
import { Link } from 'react-router-dom'

export default class FooterBar extends Component{
  render(){
    return(
      <Fragment>
        <div className='footer'>
          <ul>
            <li>
              <Link to='/'>
                <span className="iconfont icon-feizhu"></span>
                <p>首页</p>
              </Link>
            </li>
            <li>
              <Link to='/find'>
                <span className="iconfont icon--faxian"></span>
                <p>发现</p>
              </Link>
            </li>
            <li>
              <Link to='/target'>
                <span className="iconfont icon-dingwei"></span>
                <p>目的地</p>
              </Link>
            </li>
            <li>
              <Link to='/trip'>
                <span className="iconfont icon-hangcheng"></span>
                <p>行程</p>
              </Link>
            </li>
            <li>
              <Link to='/me'>
                <span className="iconfont icon-wode1"></span>
                <p>我的</p>
              </Link>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
