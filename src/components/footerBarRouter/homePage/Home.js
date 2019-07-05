import React, { Component, Fragment } from 'react'
import './home.scss'
import NotLogginHeader from '../../../page/notLoggedHeader/NotLogginHeader'

export default class Home extends Component{
  render(){
    return(
      <Fragment>
        <NotLogginHeader/>
      </Fragment>
    );
  }
}
