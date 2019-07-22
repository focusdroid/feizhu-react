import React, { Component, Fragment } from 'react'
import './content.scss'
import '../../style/css/base.css'
import { Link } from 'react-router-dom'
import Tourist from '../../view/mianBranch/tourist/Tourist' // 当地旅游季，在view/mainBranch/tourist/Tourist.js中
import TravelTheme from '../../view/mianBranch/travelTheme/TravelTheme' // 当地旅游季，在view/mainBranch/tourist/Tourist.js中
import GuessLove from '../../view/mianBranch/guessLove/GuessLove' // 当地旅游季，在view/mainBranch/tourist/Tourist.js中
import { connect } from 'react-redux'
import { getAPI } from '../../api/index'

class Content extends Component{
  render(){
    const { GuessLoveList } = this.props
    return (
      <Fragment>
        <div className='mt30 content'>
          {/*链接票务代售start*/}
          <div>
            <ul className='disflex content-ul'>
              <li>
                <Link to='/planeticket/contentfeizhu'>
                  <img src="//gw.alicdn.com/tfs/TB1JCcHCqmWBuNjy1XaXXXCbXXa-210-126.png_110x10000.jpg_.webp" alt=""/>
                  <p>机票</p>
                </Link>
              </li>
              <li>
                <Link to='/hotel/hotelcollection'>
                  <img src="//gw.alicdn.com/tfs/TB1s51ECuOSBuNjy0FdXXbDnVXa-210-126.png_110x10000.jpg_.webp" alt=""/>
                  <p>酒店</p>
                </Link>
              </li>
              <li>
                <Link to='/traintickets'>
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
        {/*新发现start*/}
        <div className='new-find'>
          <div className='new-posit'>
            <Link to='/tips' className='new-left new-back'>
              <div className='new-backg-vague'>
                <div className='new-left-text'>
                  <p className='people-text'>懒猫旅行 清迈丛林 飞跃一日游 飞跃天际 skyline 泰国清迈...</p>
                  <p className='people-num'>10127<span>人说好</span></p>
                </div>
              </div>
            </Link>
            <div className='new-right'>
              <Link to='/tips'>
                <div className='new-back new-r-top'>
                  <div className='img1'>
                    <img src="https://gw.alicdn.com/tfs/TB1f5o4wDqWBKNjSZFxXXcpLpXa-107-35.png_110x10000.jpg_.webp" alt=""/>
                  </div>
                  <div className='disflex aircraft'>
                    <div className='disflex aircraft-chirder'>
                      <p>成都</p>
                      <img src="https://gw.alicdn.com/tfs/TB1bPqkwCMmBKNjSZTEXXasKpXa-27-26.png_110x10000.jpg_.webp" alt=""/>
                      <p>广州</p>
                    </div>
                    <div className='aircraft-text'>单程</div>
                  </div>
                  <div className='discount-money'>
                    <p className='discount-p'>
                      <span className='discount-span-one'>￥</span>
                      595起
                      <span className='discount-span-two'>3.5折</span></p>
                  </div>
                </div>
              </Link>
              <Link to='/'>
                <div className='new-back new-r-bottom'>
                  <div className='promotion-text'>万家酒店抄底大促销</div>
                  <div className='promotion-money'>超低价<span className='promotion-font'>优选商家</span></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/*新发现end*/}
        {/*  当地旅游季start*/}
        <Tourist test={this.props.test}/>
        {/*{this.props.test.name}*/}
        {/*  当地旅游季end*/}
      {/*  旅游主题start*/}
        <TravelTheme/>
      {/*  旅游主题end*/}
      {/* 猜你喜欢start*/}
        <GuessLove GuessLoveList={GuessLoveList}/>
      {/* 猜你喜欢end*/}
      <p style={{marginBottom: 40,marginTop: 30, textAlign: 'center'}}>我也是有底线的</p>
      </Fragment>
    );
  }
  componentDidMount() {
    getAPI().then((res) => {
      console.log(res)
    })
  }
}

const mapStateToProps = (state) => {
  return{
    travelImgList: state.travelImgList,
    test: state.test,
    GuessLoveList: state.GuessLoveList
  }
}

// 方法执行区间
const mapDispatchToProps = (dispatch) => {
  return {

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Content)
