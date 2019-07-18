import React, { Component, Fragment } from 'react'
import FooterBar from "../page/footerBar/FooterBar";

export default class Admin extends Component{
  render(){
    return (
      <Fragment>
        { this.props.children }
        {/*  底部导航栏start*/}
        <FooterBar/>
        {/*  底部导航栏end*/}
      </Fragment>
    );
  }
}
