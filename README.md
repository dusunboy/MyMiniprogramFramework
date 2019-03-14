# 我的小程序轻量级框架

## 特性

* 统一父类BasePage
* Promise化小程序接口
* Promise化网络请求以及注入拦截器
* 支持引入NPM包
* margin,padding样式简写

## 目录介绍

``` txt
├── components                       // 组件目录
├── image                            // 图片目录
├── pages                            // 页面目录
├── styles                           // 样式目录
│   └── dimen.wxss                   // 尺寸样式
├── utils                            // 工具目录
│   ├── api.js                       // 接口地址APi类
│   ├── interceptor.js               // 请求拦截类
│   ├── request.js                   // 网络请求类
│   ├── util.js                      // 工具类
│   └── weChat.js                    // Promise化小程序接口
├── app.js                           // app入口
├── app.wxss                         // 全局样式
├── basePage.js                      // Page的父类
├── package.json                     // npm依赖配置
├── project.config.json              // 项目配置文件
└── README.md                        // 项目说明
```

## 使用示例

``` JS
// pages/demo/demo.js
this.weChat.api('showLoading')
const data = {
  test: '1',
  test1: '2'
}
//Get请求
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

//下载请求
const promise = this.request
  .downloadFile(this.api.API_TEST_DOWNLOAD)
  .then(res => {
    console.log(res)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    this.weChat.api('hideLoading')
  })
promise.downloadTask.onProgressUpdate(res => {
  console.log('下载进度', res.progress)
  console.log('已经下载的数据长度', res.totalBytesWritten)
  console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
})

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

//*.wxml margin: 2rpx；简写
<view class="m2" ></view>
```
