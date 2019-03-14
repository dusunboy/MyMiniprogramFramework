// pages/demo/demo.js
import BasePage from '../../basePage'

new BasePage({
  /**
   * 页面的初始数据
   */
  data: {
    navTitle: 'demo'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('demo onLoad')
    // 登陆接口
    this.weChat
      .api('showLoading', {title: '测试'})
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
        }, 2000)
      })
  },

  onBack() {
    console.log('返回demo')
  },

  testRequest() {
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
  },

  testDownload() {
    this.weChat.api('showLoading')
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
  }
})
