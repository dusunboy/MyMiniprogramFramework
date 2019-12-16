// pages/navigation-bar/navigation-bar.js
import BasePage from '../../../basePage'

new BasePage({

  /**
   * 页面的初始数据
   */
  data: {
    navTitle: '导航栏',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  setTitle() {
    if (this.data.navTitle !== '导航栏') {
      this.setData({
        navTitle: '导航栏'
      })
    } else {
      this.setData({
        navTitle: 'WeChat'
      })
    }
  },
  setLoading() {
    if (this.data.isNavLoading !== false) {
      this.setData({
        isNavLoading: false
      })
    } else {
      this.setData({
        isNavLoading: true
      })
    }
  },
  setShowNav() {
    if (this.data.isShowNav === false) {
      this.setData({
        isShowNav: true
      })
    } else {
      this.setData({
        isShowNav: false
      })
    }
  },
  setTitleStyle() {
    if (this.data.navTitleColor !== 'white;') {
      this.setData({
        navTitleColor: 'white;'
      })
    } else {
      this.setData({
        navTitleColor: '#333300;'
      })
    }
  },
  setBgStyle() {
    if (this.data.navBgStyle !== 'linear-gradient(45deg, #FFB6C1, #FFB6C1);') {
      this.setData({
        navBgStyle: 'linear-gradient(45deg, #FFB6C1, #FFB6C1);'
      })
    } else {
      this.setData({
        navBgStyle: 'linear-gradient(45deg, #FF00FF, #FAFAD2);'
      })
    }
  },
  setshowBack() {
    this.setData({
      isShowNavBack: !this.data.isShowNavBack
    })
  }
})
