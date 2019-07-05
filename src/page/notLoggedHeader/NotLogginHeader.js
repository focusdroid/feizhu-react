import React, { Component } from 'react'
import './notLogged.scss'
import '../../style/css/base.css'

export default class NotLogginHeader extends Component{
  render(){
    return(
      <header className='feizhu-home'>
        {/*未登录飞猪的标题栏和搜索栏start*/}
        <div className='feizhu disflex jcsb'>
          <div></div>
          <div>飞猪</div>
          <div className='feizhu-logged-icon'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUdwTDQ0NDMzMzQ0NDMzMzQ0NDMzMzw8PDMzMzMzMzY2NjQ0NDMzMzMzMzMzMwhYo1AAAAAOdFJOUwDA/HXpPbALmdIhW56MA3IOiwAAAV1JREFUOMu1lL1KA1EQha8ka2JsDErEJsUSBQuHCGqhsEhExGYJGrATo02qEEHBMlVsVawlYC8Be5/BJxAcY0CF8wxu9sfdezNgo9PscL+ds3NnDqvUf8R+J+/Hs36cWYENP6Z0UEMUOkjZjN2h0IwBHPTX/WRMBxbhUkngjN6UCBy0ZeCWWiKwECkZIIVPGWRpUwbjdPUrmOAjWSrNbfnjDyjL7TqoihfMVPpKHEk2rtWH6PCOksZ+Aa4qYVH3rqEUrvYWZJdN84Rm2B5x1dA+NrZaouEaq8Kx9dipFxobRk8qt0yekqfF013t9SJHPqTXRFGuSSCUrucqYPAgrqkR908Ohtn5mkv80/KkzXG9VSS7F+Z7+EjoWneYD9MbzCY7OcVitNeBdt9MM9xuGvoKvOUE1jiEMdEU3v3nC3eNedKS/zzmvBG0EACMRACeyDznr+DidVOq0PvTP8s3+V20chwLWVgAAAAASUVORK5CYII=" alt=""/>
          </div>
        </div>
        {/*未登录飞猪的标题栏和搜索栏end*/}
        {/*  未登录的搜索框start*/}
        <div className='notlogged-search'>

        </div>
        {/*  未登录的搜索框end*/}
      </header>
    );
  }
}
