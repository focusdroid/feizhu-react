import React, { Component, Fragment } from 'react'
import './notLoggedSearch.scss'
import '../../style/css/base.css'

export default class NotLoggedSearch extends Component{
  render(){
    return (
      <Fragment>
        <div className='search'>
          <div className='search-box'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAaVBMVEUAAABmZmZoaGhmZmZmZmZmZmZmZmZnZ2dnZ2dmZmZnZ2dnZ2dpaWloaGhpaWlmZmZmZmZmZmZmZmZmZmZnZ2dnZ2doaGhmZmZ4eHhnZ2dmZmZmZmZnZ2dnZ2dmZmZnZ2dmZmZmZmZmZmYqTRcvAAAAInRSTlMA+k3li/fy38xvUi8nGRHTxMGgnZN0XQoIermsq4ZpQzweK5j6zgAAAPpJREFUeAGtku0OoyAQAFkBUeuHtdba73be/yEv6YYcSnK/bn4NmSyyiSbynisrtpqai8lZApHyvO5iNwJynNzp5oFw2NSDBfvqf742A5RFOmvhlHzxKvhkfoSrSWkE28fDAiezpQYXPWCzXUZ8p/aGl9nzgVptRnqTETiqVCo7ZryKZTI5Z9A7BWdyFmh1WtfKV9OnV9xMjkNUJvya54FKpYEmqy081S4lQ5YfSPt3h+uuFnCPvgZke/2hpPymJ6nT2RJcevYwfuKrHgBS7P4mwnxeajcApZNt750nIvevKXbddPXRA1I9fxtp39K3nUreI/+zB/OvHtwfX4kVEsXkRdIAAAAASUVORK5CYII=" alt=""/>
            <input type="text" placeholder='婺源'/>
          </div>
          <div className='search-close'>
            <p>取消</p>
          </div>
        </div>
        {/*搜索结果显示页面或者默认数据结果显示页面start*/}
        <div className='search-target'>
          <div className='search-search'>
              <h5>搜索 发现</h5>
          </div>
          <div className='search-result'>
            <ul className='search-result-ul'>
              <li className='disflex search-result-li'>
              <div className='search-img'>
                <img src="https://gw.alicdn.com/tfs/TB1vDGqpcLJ8KJjy0FnXXcFDpXa-32-32.png" alt=""/>
              </div>
              <div className='search-text'>
                <ul className='disflex text-new'>
                  <li>火车票</li>
                  <li>机票</li>
                  <li>汽车票</li>
                </ul>
              </div>
            </li>
              <li className='disflex search-result-li'>
                <div className='search-img'>
                  <img src="https://gw.alicdn.com/tfs/TB1zZXdpgvD8KJjy0FlXXagBFXa-32-32.png" alt=""/>
                </div>
                <div className='search-text'>
                  <ul className='disflex text-new'>
                    <li>酒店</li>
                  </ul>
                </div>
              </li>
              <li className='disflex search-result-li'>
                <div className='search-img'>
                  <img src="https://gw.alicdn.com/tfs/TB1xnGqpcLJ8KJjy0FnXXcFDpXa-32-32.png" alt=""/>
                </div>
                <div className='search-text'>
                  <ul className='disflex text-new'>
                    <li>云南旅游</li>
                    <li>上海迪士尼门票</li>
                    <li>珠海长隆海洋王国</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/*搜索结果显示页面或者默认数据结果显示页面end*/}
      </Fragment>
    );
  }
}
