// 请求拦截类
import WeChat from '../utils/weChat'

/**
 * 请求之前
 * @param {*} obj
 */
const beforeRequest = obj => {
  /**
   * 是否终止请求
   */
  let isCancelRequest = false
  // console.log(obj);
  if (typeof (obj.data) != "undefined" &&
    typeof (obj.data.isShowLoading) != "undefined" 
    && obj.data.isShowLoading) {
    WeChat.api('showLoading', {
      title: '加载中...',
      mask: true,
    })
  }
  return isCancelRequest
}

/**
 * 请求响应后
 * @param {*} obj
 */
const response = obj => {
  WeChat.api('hideLoading')
  try {
    if (obj.data.header["Set-Cookie"]) {
      wx.setStorageSync("sessionKey", obj.data.header["Set-Cookie"]);
    }
  } catch (e) {
  }
  return obj.data
}

/**
 * 请求响应错误后
 * @param {*} obj
 */
const responseError = obj => {
  console.log(obj);
  WeChat.api('hideLoading')
  return obj.data
}

module.exports = {
  beforeRequest: beforeRequest,
  response: response,
  responseError: responseError
}