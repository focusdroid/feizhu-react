import React, { Component, Fragment } from 'react'
import './routeselect.scss'

export default class RouteSelection extends Component{
  constructor (props) {
    super(props);
    this.state = {
      addClassName: '1'
    }
    this.handleChangeone = this.handleChangeone.bind(this)
    this.handleChangetwo = this.handleChangetwo.bind(this)
    this.handleChangethree = this.handleChangethree.bind(this)
  }
  render(){
    return(
      <Fragment>
        <div className='route-select'>
          <div className='tickselect'>
          {/*  票程选项卡start*/}
          <ul className='tickselect-ul'>
            <li onClick={this.handleChangeone}>
              <div className={`${this.state.addClassName === '0' ? 'line active':''}`} >
                单程
              </div>
            </li>
            <li onClick={this.handleChangetwo}>
              <div className={`${this.state.addClassName === '2' ? 'line active':''}`}>
                往返
              </div>
            </li>
            <li onClick={this.handleChangethree}>
              <div  className={`${this.state.addClassName === '3' ? 'line active':''}`}>
                跨境多程
              </div>
            </li>
          </ul>
          {/*  票程选项卡end*/}
          </div>
        </div>
      </Fragment>
    );
  }
  handleChangeone () { // 单程
    this.setState(()=>({
      addClassName: '1'
    }))
  }
  handleChangetwo () { // 往返
    this.setState(()=>({
      addClassName: '2'
    }))
  }
  handleChangethree () { //
    this.setState(()=>({
      addClassName: '3'
    }))
  }
}
