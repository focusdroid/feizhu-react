import React, { Component, Fragment } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';

export default class Carousels extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      // imgHeight: 110,
    }
  }
  render(){
    const { photolist, imgHeight } = this.props;
    return(
      <Fragment>
        <WingBlank>
          <Carousel
            autoplay
            infinite
            autoplayInterval={3000}
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {photolist.map(val => (
              <a
                key={val}
                href="https://github.com/focusdroid/feizhu-react"
                style={{ display: 'inline-block', width: '100%', height: imgHeight }}
              >
                <img
                  src={`${val}`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
      </Fragment>
    );
  }
}
