import React from 'react'
import '../../../style/css/base.css'
import './tourist.scss'
import { Link } from 'react-router-dom'

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
