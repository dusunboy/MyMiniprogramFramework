# 我的小程序轻量级框架

## 特性

* 统一父类BasePage
* Promise化小程序接口
* Promise化网络请求以及注入拦截器
* 支持引入NPM包
* margin,padding样式简写
* 封装几种常用组件

## 目录介绍

``` txt
├── components                       // 组件目录
├── image                            // 图片目录
├── pages                            // 页面目录
├── styles                           // 样式目录
│   └── dimen.wxss                   // 尺寸样式
├── requests                         // 请求目录
│   ├── api.js                       // 接口地址APi类
│   ├── interceptor.js               // 请求拦截类
│   └── request.js                   // 网络请求类
├── utils                            // 工具目录
│   ├── util.js                      // 工具类
│   └── weChat.js                    // Promise化小程序接口
├── app.js                           // app入口
├── app.wxss                         // 全局样式
├── basePage.js                      // Page的父类
├── config.js                        // 配置文件
├── package.json                     // npm依赖配置
├── project.config.json              // 项目配置文件
└── README.md                        // 项目说明
```

## 安装源码

* [使用脚手架生成项目**fw-cli**](https://github.com/dusunboy/fw-cli)
* 可直接下载项目

## 使用示例

``` JS
// pages/demo/demo.js
const data = {
  test: '1',
  test1: '2',
  isShowLoading: true
}
const promise = this.request
  .get({
    url: this.api.TEST,
    data: data
  })
  .then(res => {
    console.log(res)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    console.log(promise)
  })

//下载请求
const promise = this.request
  .downloadFile({
    url: this.api.TEST_DOWNLOAD,
    data: {
      isShowLoading: true
    }
  })
  .then(res => {
    console.log(res)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {

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
  return isCancelRequest
}

/**
 * 请求响应后
 * @param {*} obj
 */
const response = obj => {
  return obj.data
}

/**
 * 请求响应错误后
 * @param {*} obj
 */
const responseError = obj => {
  return obj.data
}

//*.wxml margin: 2px；简写
<view class="m2" ></view>
//*.wxml padding: 2px；简写
<view class="p2" ></view>
```
