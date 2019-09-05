import React, { Component, Fragment } from 'react';
import { Icon } from 'antd-mobile'
import './goback.scss'


export default class GoBack extends Component{
  constructor (props) {
    super(props);
    this.hangleGoBack = this.hangleGoBack.bind(this)
  }
  render(){
    return (
      <Fragment>
        <div className='goback'>
          <div className='goback-box'>
            <div className='back-first' onClick={this.hangleGoBack}>
              <Icon type="left" className='back-icon'/>
            </div>
            <div className='back-secoed'>
              国内/国际机票
            </div>
            <div className='back-three'>
              <Icon type='ellipsis'/>
              <div className='warn-box'>
                <span className='warn'></span>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
  hangleGoBack () {
    window.history.go(-1)
  }
}
