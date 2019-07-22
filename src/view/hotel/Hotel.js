import React, {Component, Fragment} from 'react';
import HotelBar from './hotelBar/HotelBar'

export default class Hotel extends Component{
  render() {
    return (<Fragment>
      { this.props.children }
      <HotelBar/>
    </Fragment>);
  }
}
