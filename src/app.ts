import { createApp } from 'vue'
import { createPinia } from 'pinia'
import wx from 'weixin-js-sdk-ts'

import './app.scss'

const App = createApp({
  onShow (options) {
    console.log(options, wx)
    // const timestamp: number = new Date().getTime()
    // wx.config({
    //   debug: true,
    //   appId: 'wx0d22ad52fb6544db',
    //   timestamp: timestamp,
    //   nonceStr: '', 
    //   signature: '',
    //   jsApiList: []
    // })
    wx.ready(function(){
      
    })
    wx.error(function(res){
      console.log(res)
    })
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia())

export default App
