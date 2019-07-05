import React, { Component, Fragment } from 'react'
import './home.scss'
import NotLogginHeader from '../../../page/notLoggedHeader/NotLogginHeader' // 未登录的header
import Content from '../../../page/content/Content'

export default class Home extends Component{
  render(){
    return(
      <Fragment>
        <NotLogginHeader/>
        <Content/>
      </Fragment>
    );
  }
}
