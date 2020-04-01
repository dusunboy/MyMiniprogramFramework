// pages/test-module/tab-bar/tab-bar.js
import config from '../../../config'
import BasePage from '../../../basePage'

const baseImageUrl = config.baseImageUrl

new BasePage({

  /**
   * 页面的初始数据
   */
  data: {
    navTitle: '自定义Tabbar',
    selected: 'my-components',
    color: "#C8CAD0",
    selectedColor: "#FF7C00",
    list: [{
        tab: "my-components",
        iconPath: baseImageUrl + "/btn_ddgl.png",
        selectedIconPath: baseImageUrl + "/btn_ddgl_pressed.png",
        text: "首页"
      },
      {
        tab: "my-components1",
        iconPath: baseImageUrl + "/btn_grzx.png",
        selectedIconPath: baseImageUrl + "/btn_grzx_pressed.png",
        text: "我的订单"
      }
    ]
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
  /**
   * 选择Tab
   */
  switchTab(e) {
    const index = e.detail.index
    const tabBarHeight = e.detail.tabBarHeight
    this.setData({
      selected: this.data.list[index].tab,
      tabBarHeight: tabBarHeight,
    })
  }
})