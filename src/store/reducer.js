const defaultState = {
  travelImgList:[ // 首页当季旅游季背景图
    {
      id: '001',
      img: 'https://gw.alicdn.com/imgextra/i2/2882533541/TB2IsADrcUrBKNjSZPxXXX00pXa_!!2882533541-0-wefliggy.jpg_110x10000Q75.jpg_.webp',
      address: '成都',
    },
    {
      id: '002',
      img: 'https://gw.alicdn.com/imgextra/i4/669272/TB2ZzvXrVXXXXadXXXXXXXXXXXX_!!0-travel.jpg_110x10000Q75.jpg_.webp',
      address: '香港'
    },
    {
      id: '003',
      img: 'https://gw.alicdn.com/imgextra/i1/669272/TB2mR7YspXXXXcJXpXXXXXXXXXX_!!0-travel.jpg_110x10000Q75.jpg_.webp',
      address: '曼谷'
    },
    {
      id: '004',
      img: 'https://gw.alicdn.com/tps/TB1EQxUOVXXXXX6XFXXXXXXXXXX-800-800.jpg_110x10000Q75.jpg_.webp',
      address: '惠州'
    },
    {
      id: '005',
      img: 'https://gw.alicdn.com/tfs/TB17l52RFXXXXchXpXXXXXXXXXX-750-750.png_110x10000.jpg_.webp',
      address: '丽江'
    }
  ],
  test: {name: 'focusdroid', age: 24}
}

export default (state = defaultState, action) => {
  return state
}
