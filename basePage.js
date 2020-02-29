//页面基类

import WeChat from './utils/weChat'
import Request from './requests/request'
import Api from './requests/api'

/**
 * 基类
 * 用于提供一些公共方法
 */
class BasePage {
  constructor(obj, ...args) {
    // super(obj)

    this.obj = obj
    this.initData()
    this.initLifeCircle()

    Page(this.obj, ...args)
  }

  /**
   * 注入初始化數據
   */
  initData() {

    //是否显示导航栏
    if (typeof this.obj.data.isShowNav === 'undefined') {
      this.obj.data.isShowNav = true
    }
    //导航栏是否加载中
    if (typeof this.obj.data.isNavLoading === 'undefined') {
      this.obj.data.isNavLoading = false
    }
     //导航栏标题名称
    if (typeof this.obj.data.navTitle === 'undefined') {
      this.obj.data.navTitle = '轻量级框架'
    }
    // 导航栏标题颜色
    if (typeof this.obj.data.navTitleColor === 'undefined') {
      this.obj.data.navTitleColor = 'white'
    }
    // 导航栏背景颜色
    if (typeof this.obj.data.navBgStyle === 'undefined') {
      this.obj.data.navBgStyle = 'linear-gradient(45deg, #ff891a, #ff891a)'
    }
    // 导航栏是否开启动画
    if (typeof this.obj.data.isNavAnimated === 'undefined') {
      this.obj.data.isNavAnimated = false
    }
    // 导航栏后退按钮是否显示
    if (typeof this.obj.data.isShowNavBack === 'undefined') {
      this.obj.data.isShowNavBack = true
    }
    if (typeof this.obj.data.navMode === 'undefined') {
      this.obj.data.navMode = 'white'
    }

    this.obj.weChat = WeChat
    this.obj.request = Request
    this.obj.api = Api
    
  }

  /**
   * 注入页面的生命周期
   */
  initLifeCircle() {
    const list = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onBack']
    const _self = this

    for (let fn of list) {
      let tempFn = this.obj[fn]

      this.obj[fn] = function(...args) {
        if (_self[fn]) args = _self[fn].apply(this, args) || args

        if (tempFn) tempFn.apply(this, args)
      }
    }
  }

  /**
   * 生命周期函数--监听页面加载   
   */
  onLoad() {}

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {}

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {}

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {}

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {}

  /**
   * 返回上一层页面
   */
  onBack() {
    console.log('onBack');
  }

}

module.exports = BasePage
