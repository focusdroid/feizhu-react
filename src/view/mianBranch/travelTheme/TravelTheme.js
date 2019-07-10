import React, { Fragment } from 'react'
import '../../../style/css/base.css'
import './travelTheme.scss'
import { Link } from 'react-router-dom'

function TravelTheme () {
  return(
    <Fragment>
      <div className='traveltheme'>
        <div className='traveltheme-title'>旅行主题</div>
        <div className='traveltheme-desc'>最适合你的旅行方式</div>
      </div>
      <div className='mt10'>
        <div className='traveltheme-img mt20'>
          <div className='traveltheme-img-top disflex'>
            <Link to='/' className='w63'>
              <div className='top-first heig5 img-posit'>
                <div className='img-back-shad'>
                  <p className='p-title'>带娃游乐园</p>
                  <p className='p-content'>欢乐亲子时光</p>
                </div>
              </div>
            </Link>
            <Link to='/' className='w37 img-back-shad'>
              <div className='top-secode heig5 img-posit'>
                <p className='p-title'>带娃游全国</p>
                <p className='p-content'>带娃点亮地图</p>
              </div>
            </Link>
          </div>
          <div className='traveltheme-img-bottom'>
            <ul>
              <li>
                <Link to='/'>
                  <div className='heig5 img-b-first img-posit'>
                    <p className='p-title'>主题乐园控</p>
                    <p className='p-content'>刷遍全国乐园</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <div className='heig5 img-b-secode img-posit'>
                    <p className='p-title'>江浙沪包游</p>
                    <p className='p-content'>江南水乡荡悠悠</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <div className='heig5 img-b-three img-posit'>
                    <p className='p-title'>亲自酒店榜</p>
                    <p className='p-content'>带娃快乐入眠</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TravelTheme;
