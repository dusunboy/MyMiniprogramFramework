// pages/demo/demo.js
import BasePage from '../../basePage'
import {
  $Message
} from '../../components/message/message'

new BasePage({
  /**
   * 页面的初始数据
   */
  data: {
    navTitle: '测试',
    // navMode: 'white',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('demo onLoad')
    // 登陆接口
    this.weChat
      .api('showLoading', {
        title: '测试'
      })
      .then(res => {
        console.log('success:', res)
      })
      .catch(error => {
        console.log('failed:', error)
      })
      .finally(() => {
        console.log('结束')
        setTimeout(() => {
          this.weChat.api('hideLoading')
          $Message({
            content: '消息提示',
            type: 'success'
          })
        }, 2000)
      })
  },

  onBack() {
    console.log('返回demo')
  },

  testRequest() {
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
  },

  testDownload() {
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
  },
  testNavigationBar() {
    this.weChat.api('navigateTo', {
      url: '../test-module/navigation-bar/navigation-bar'
    })
  },
  testRecycleView() {
    this.weChat.api('navigateTo', {
      url: '../test-module/recycle-view/recycle-view'
    })
  },
  testSlideView() {
    this.weChat.api('navigateTo', {
      url: '../test-module/slide-view/slide-view'
    })
  },
  testSmCrypto() {
    this.weChat.api('navigateTo', {
      url: '../test-module/sm-crypto/sm-crypto'
    })
  },
  testTabbar() {
    this.weChat.api('navigateTo', {
      url: '../test-module/tab-bar/tab-bar'
    })
  }
})