import React, { Component, Fragment } from 'react'
import '../../../style/css/base.css'
import './guesslove.scss'
import { Link } from 'react-router-dom'

export default class GuessLove extends Component{
  render(){
    const { GuessLoveList } = this.props
    return (
      <Fragment>
        <div className='guesslove'>
          <div className='guess-main'>
            <div className='guess-main-title'>猜你喜欢</div>
            <div className='guess-main-text'>你想要的旅行行货</div>
          </div>
          <div className='guess-love-child'>
            <ul className='guess-love-child-ul'>
              {
                GuessLoveList.map((item, i, ele) => {
                  return (<li key={item.id}>
                    <Link to='/'>
                      <div>
                        <img className='gl-img' src={item.img} alt=""/>
                        <p className='gress-title'>{item.address}</p>
                        <p className='gress-detail'>{item.detail}</p>
                        <div className='guess-money'>
                          <span className='guess-span-one'><i>￥</i>{item.money}</span>
                          <span className='guess-span-two'>{item.personNum}人购买</span>
                          <span className='guess-span-three'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAIBAMAAAAYZIIqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURc7OzszMzNDQ0N/f3////0dwTMzMzNch8N8AAAAGdFJOUy/iOQgCAHtOoNwAAABGSURBVAjXYwh1YAkNhRBGyqEMAWKJrKFgIkgsUZXBMS1NJBRMGKalCTOwpaUlhIIJtbS0JAY4C8KFq4MohpsCMQpuB5gAABdzHmvIUZBpAAAAAElFTkSuQmCC" alt=""/>
                      </span>
                        </div>
                      </div>
                    </Link>
                  </li>)
                })
              }
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}
