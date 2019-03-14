//页面基类

import WeChat from './utils/weChat'
import Request from './utils/request'
import Api from './utils/api'

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

    Page(obj, ...args)
  }

  /**
   * 注入初始化數據
   */
  initData() {
    this.obj.data = {
      //是否显示导航栏的返回按钮
      isShowBack: true,
      //导航栏是否加载中
      isNavLoading: false,
      //返回上级页面返回按钮是否生效
      isNavEnable: true,
      //导航栏标题名称
      navTitle: '',
      //可设定导航栏标题样式
      navTitleStyle: 'background-color: #ff797b;',
      //可设定导航栏样式
      navBgStyle: 'background-color: #ff797b;',
      //设置返回按钮颜色， 仅支持 white 和 black
      navTextStyle: 'white'
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
   * @param {*} options
   */
  onLoad(options) {}

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
  onBack() {}
}

module.exports = BasePage
