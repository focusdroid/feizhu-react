import React, { Component, Fragment } from 'react'
import './concatfeizhu.scss'
import GoBack from '../goback/GoBack' // header部分的返回按钮
import Carouse from '../../../plugin/carousel/Carousel' // 轮播图
import RouteSelection from '../routeselection/RouteSelection' // 切换票务路程的选项卡

export default class ContentFeiZhu extends Component{
  constructor(props){
    super(props);
    this.state = {
      imgHeight: 80,
      photolist: [
        'https://gw.alicdn.com/tfs/TB1OkoYeQY2gK0jSZFgXXc5OFXa-702-168.jpg',
        'https://gw.alicdn.com/tfs/TB1LLzJeET1gK0jSZFrXXcNCXXa-702-168.png',
        'https://gw.alicdn.com/tfs/TB1B_IoepP7gK0jSZFjXXc5aXXa-702-168.jpg',
        'https://gw.alicdn.com/tfs/TB1QAk3eHr1gK0jSZFDXXb9yVXa-702-168.png',
        'https://gw.alicdn.com/tfs/TB1PYI3eUY1gK0jSZFCXXcwqXXa-702-168.jpg',
        'https://gw.alicdn.com/tfs/TB1ZhwkcAT2gK0jSZPcXXcKkpXa-702-168.png'
      ]
    }
  }
  render () {
    return(<Fragment>
      <GoBack/>
      <div className='concat-backimg'>
        <RouteSelection/>
      </div>
    {/*  轮播图广告页面start*/}
      <Carouse photolist={this.state.photolist} imgHeight={this.state.imgHeight}/>
    {/*  轮播图广告页面end*/}
    </Fragment>);
  }
}
