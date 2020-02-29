// pages/demo/demo.js
import BasePage from '../../basePage'

new BasePage({
  /**
   * 页面的初始数据
   */
  data: {
    navTitle: '主页面',
    navBgStyle: 'linear-gradient(45deg, #ffffff, #ffffff)',
    navTitleColor: 'black',
    navMode: 'black',
    isShowNavBack: false
    // navMode: 'white',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.weChat.api('setNavigationBarColor', {
      frontColor: '#000000',
      backgroundColor: '#ffffff'
    })
  },
  toDemo() {
    this.weChat.api('navigateTo', {
      url: '../../pages/demo/demo' 
    })
  }
})