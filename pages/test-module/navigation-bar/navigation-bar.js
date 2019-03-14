// pages/navigation-bar/navigation-bar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    enable: true,
    loading: false,
    title: '',
    titleStyle: '',
    bgStyle: 'position: fixed',
    delta: 2,
    textStyle: 'white',
    showBack: true
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

  onnavback(e) {
    console.log('navback', e)
  },
  setTitle() {
    if (this.data.title !== '微信') {
      this.setData({
        title: '微信'
      })
    } else {
      this.setData({
        title: 'WeChat'
      })
    }
  },
  setLoading() {
    if (this.data.loading === false) {
      this.setData({
        loading: true
      })
    } else {
      this.setData({
        loading: false
      })
    }
  },
  setNavBack() {
    if (this.data.enable === false) {
      this.setData({
        enable: true
      })
    } else {
      this.setData({
        enable: false
      })
    }
  },
  setTitleStyle() {
    if (this.data.titleStyle !== 'color: #333300;') {
      this.setData({
        titleStyle: 'color: #333300;'
      })
    } else {
      this.setData({
        titleStyle: 'color: #fff;'
      })
    }
  },
  setBgStyle() {
    if (this.data.bgStyle !== 'background-color: #60A718;') {
      this.setData({
        bgStyle: 'background-color: #60A718;'
      })
    } else {
      this.setData({
        bgStyle: 'background-color: #000;'
      })
    }
  },
  setshowBack() {
    this.setData({
      showBack: !this.data.showBack
    })
  }
})
