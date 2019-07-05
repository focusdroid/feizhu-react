import React, { Component, Fragment } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';

export default class Carousels extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 110,
      photolist: ['http://gw.alicdn.com/tfs/TB1zGnPeLWG3KVjSZFPXXXaiXXa-1125-352.jpg_790x10000Q75.jpg_.webp', 'https://gw.alicdn.com/tfs/TB1NnWqeL1G3KVjSZFkXXaK4XXa-1125-352.jpg_790x10000Q75.jpg_.webp', 'http://gw.alicdn.com/tfs/TB17QUEeRKw3KVjSZFOXXarDVXa-1125-352.jpg_790x10000Q75.jpg_.webp', 'http://gw.alicdn.com/tfs/TB1K3Sbe8WD3KVjSZFsXXcqkpXa-1125-352.jpg_790x10000Q75.jpg_.webp', 'http://gw.alicdn.com/tfs/TB1j0CLeGSs3KVjSZPiXXcsiVXa-1125-352.jpg_790x10000Q75.jpg_.webp', 'http://gw.alicdn.com/tfs/TB1IApAe.GF3KVjSZFmXXbqPXXa-1125-352.jpg_790x10000Q75.jpg_.webp', 'http://gw.alicdn.com/tfs/TB11jUbeL1H3KVjSZFBXXbSMXXa-1125-352.jpg_790x10000Q75.jpg_.webp']
    }
  }
  render(){
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
            {this.state.photolist.map(val => (
              <a
                key={val}
                href="https://github.com/focusdroid/feizhu-react"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
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
