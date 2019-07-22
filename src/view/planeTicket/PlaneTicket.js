import React, { Component, Fragment } from 'react'
import PlaneFotterBar from './planeFotterBar/PlaneFotterBar'

export default class PlaneTicket extends Component{
  render(){
    return(<Fragment>
      { this.props.children }
      <PlaneFotterBar />
    </Fragment>);
  }
}
