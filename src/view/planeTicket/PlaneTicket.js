import React, { Component, Fragment } from 'react'
import PlaneFotterBar from './planeFotterBar/PlaneFotterBar'

export default class PlaneTicket extends Component{
  render(){
    return(<Fragment>
      888888
      { this.props.children }
      <PlaneFotterBar />
    </Fragment>);
  }
}
