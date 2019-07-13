import React, { Component } from 'react'
import '../../../style/css/base.css'
import './tourist.scss'
import { Link } from 'react-router-dom'

export default class Tourist extends Component{
  render(){
    // const { test } = this.props
    return(
      <div className='tourist'>
        <header>
          <div className='disflex jcsb mt20 tourist-header'>
            <div className='tourist-title'>当季旅游季</div>
            <div className='tourrist-address'>
              <div className='tour-add-text'>探索更多目的地</div>
              <div>
                <img className='tourist-img' src="https://gw.alicdn.com/tfs/TB1kvAaxbsrBKNjSZFpXXcXhFXa-24-24.png" alt=""/>
              </div>
            </div>
          </div>
        </header>
        {/*<h1>ppp{test.name}</h1>*/}
        <article className='tourisr-back'>
          <ul>
            <li>
              <Link to='/tip'>
                <div className='tourisr-back-base tourisr-back-img'>
                  <p>成都</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/tip2'>
                <div className='tourisr-back-base tourisr-back-img2'>
                  <p>香港</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <div className='tourisr-back-base tourisr-back-img3'>
                  <p>曼谷</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <div className='tourisr-back-base tourisr-back-img4'>
                  <p>惠州</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <div className='tourisr-back-base tourisr-back-img5'>
                  <p>丽江</p>
                </div>
              </Link>
            </li>
          </ul>
        </article>
      </div>
    );
  }
}


/* 有一个问题，怎样接受父组件的值
function Tourist(){
  return(<div className='tourist'>
      <header>
        <div className='disflex jcsb mt20 tourist-header'>
          <div className='tourist-title'>当季旅游季</div>
          <div className='tourrist-address'>
            <div className='tour-add-text'>探索更多目的地</div>
            <div>
              <img className='tourist-img' src="https://gw.alicdn.com/tfs/TB1kvAaxbsrBKNjSZFpXXcXhFXa-24-24.png" alt=""/>
            </div>
          </div>
        </div>
      </header>
      <h1>ppp{this.props.test}</h1>
      <article className='tourisr-back'>
        <ul>
          <li>
            <Link to='/'>
              <div className='tourisr-back-img'>
                <p></p>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='tourisr-back-img'>
                <p></p>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='tourisr-back-img'>
                <p></p>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='tourisr-back-img'>
                <p></p>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <div className='tourisr-back-img'>
                <p></p>
              </div>
            </Link>
          </li>
        </ul>
      </article>
    </div>
  );
}

export default Tourist;
*/
