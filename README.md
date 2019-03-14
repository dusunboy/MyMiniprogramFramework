# 我的小程序轻量级框架

## 特性

* 统一的父类BasePage
* Promise化小程序接口
* Promise化网络请求以及注入拦截器
* 支持引入NPM包

## 使用实例

``` JS
// pages/demo/demo.js
this.weChat.api('showLoading')
const data = {
  test: '1',
  test1: '2'
}
const promise = this.request
  .get(this.api.API_TEST, data)
  .then(res => {
    console.log(res)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    this.weChat.api('hideLoading')
  })
console.log(promise)

//拦截器 pages/utils/interceptor.js
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
  return isCancelRequest
}

/**
 * 请求响应后
 * @param {*} obj
 */
const response = obj => {
  // console.log(obj);
  return obj.data
}

/**
 * 请求响应错误后
 * @param {*} obj
 */
const responseError = obj => {
  // console.log(obj);
  return obj.data
}

```
