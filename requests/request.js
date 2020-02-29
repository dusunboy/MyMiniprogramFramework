// 请求类

import Interceptor from './interceptor'
import Config from '../config'
import Api from './api'
import Util from '../utils/util'

/**
 * token错误次数
 */
let tokenErrorTimes = 0

//添加事件结束
Promise.prototype.finally = function (callback) {
  var Promise = this.constructor
  return this.then(
    function (value) {
      Promise.resolve(callback()).then(function () {
        return value
      })
    },
    function (reason) {
      Promise.resolve(callback()).then(function () {
        throw reason
      })
    }
  )
}

/**
 * Http Get请求
 * @param {*} url
 * @param {*} data
 * @param {*} header
 */
const get = (params) => {
  params = getHeader(params)
  if (Interceptor.beforeRequest(params)) {
    return new Promise((resolve, reject) => {
      return reject('取消请求')
    })
  }
  return new Promise((resolve, reject) => {
    if (params.data) {
      delete params.data.isShowLoading
    }
    Promise.prototype.requestTask = wx.request({
      url: params.url,
      method: 'GET',
      data: params.data,
      header: params.header,
      responseType: params.responseType ? params.responseType : 'text',
      success(res) {

        checkToken(params, res, 'get')
          .then(res => {
            res = Interceptor.response({
              params,
              data: res
            })
            if (res.statusCode == 200) {
              return resolve(res)
            } else {
              res = Interceptor.responseError({
                params,
                data: res
              })
              return reject(res)
            }
          }).catch(error => {
            error = Interceptor.responseError({
              params,
              data: error
            })
            return reject(error)
          })
      },
      fail(error) {
        error = Interceptor.responseError({
          params,
          data: error
        })
        return reject(error)
      },
      complete() {}
    })
  })
}

/**
 * Http Post请求
 * @param {*} url
 * @param {*} data
 * @param {*} header
 */
const post = (params) => {
  params = getHeader(params)
  if (Interceptor.beforeRequest(params)) {
    return new Promise((resolve, reject) => {
      return reject('取消请求')
    })
  }
  return new Promise((resolve, reject) => {
    if (params.data) {
      delete params.data.isShowLoading
    }
    Promise.prototype.requestTask = wx.request({
      url: params.url,
      method: 'POST',
      data: params.data,
      header: params.header,
      responseType: params.responseType ? params.responseType : 'text',
      success(res) {
        checkToken(params, res, 'post')
          .then(res => {
            res = Interceptor.response({
              params,
              data: res
            })
            if (res.statusCode == 200) {
              return resolve(res)
            } else {
              res = Interceptor.responseError({
                params,
                data: res
              })
              return reject(res)
            }
          }).catch(error => {
            error = Interceptor.responseError({
              params,
              data: error
            })
            return reject(error)
          })
      },
      fail(error) {
        error = Interceptor.responseError({
          params,
          data: error
        })
        return reject(error)
      },
      complete() {}
    })
  })
}

/**
 * Http 其他类型的请求
 * @param {*} url
 * @param {*} data
 * @param {*} header
 * @param {*} method
 */
const other = (params) => {
  params = getHeader(params)
  if (Interceptor.beforeRequest(params)) {
    return new Promise((resolve, reject) => {
      return reject('取消请求')
    })
  }
  return new Promise((resolve, reject) => {
    if (params.data) {
      delete params.data.isShowLoading
    }
    Promise.prototype.requestTask = wx.request({
      url: params.url,
      method: params.method,
      data: params.data,
      header: params.header,
      responseType: params.responseType ? params.responseType : 'text',
      success(res) {

        checkToken(params, res, 'other')
          .then(res => {
            res = Interceptor.response({
              params,
              data: res
            })
            if (res.statusCode == 200) {
              return resolve(res)
            } else {
              res = Interceptor.responseError({
                params,
                data: res
              })
              return reject(res)
            }
          }).catch(error => {
            error = Interceptor.responseError({
              params,
              data: error
            })
            return reject(error)
          })
      },
      fail(error) {
        error = Interceptor.responseError({
          params,
          data: error
        })
        return reject(error)
      },
      complete() {}
    })
  })
}

/**
 * 下载文件资源到本地
 * @param {*} url
 * @param {*} filePath
 * @param {*} header
 */
const downloadFile = (params) => {
  params = getHeader(params, true)
  if (!params.filePath) {
    params.filePath = null
  }
  if (Interceptor.beforeRequest(params)) {
    return new Promise((resolve, reject) => {
      return reject('取消请求')
    })
  }
  return new Promise((resolve, reject) => {
    if (params.data) {
      delete params.data.isShowLoading
    }
    Promise.prototype.downloadTask = wx.downloadFile({
      url: params.url,
      header: params.header,
      filePath: params.filePath,
      success(res) {

        checkToken(params, res, 'downloadFile')
          .then(res => {
            res = Interceptor.response({
              params,
              data: res
            })
            if (res.statusCode == 200) {
              return resolve(res)
            } else {
              res = Interceptor.responseError({
                params,
                data: res
              })
              return reject(res)
            }
          }).catch(error => {
            error = Interceptor.responseError({
              params,
              data: error
            })
            return reject(error)
          })
      },
      fail(error) {
        error = Interceptor.responseError({
          params,
          data: error
        })
        return reject(error)
      },
      complete() {}
    })
  })
}

/**
 * 本地资源上传到服务器。
 * @param {*} url
 * @param {*} filePath
 * @param {*} name
 * @param {*} formData
 * @param {*} header
 */
const uploadFile = (params) => {
  params = getHeader(params, true)
  if (!params.filePath) {
    params.filePath = null
  }
  if (!params.name) {
    params.name = null
  }
  if (!params.formData) {
    params.formData = null
  }
  if (Interceptor.beforeRequest(params)) {
    return new Promise((resolve, reject) => {
      return reject('取消请求')
    })
  }
  return new Promise((resolve, reject) => {
    if (params.data) {
      delete params.data.isShowLoading
    }
    Promise.prototype.uploadTask = wx.uploadFile({
      url: params.url,
      header: params.header,
      filePath: params.filePath,
      name: params.name,
      formData: params.formData,
      success(res) {

        checkToken(params, res, 'uploadFile')
          .then(res => {
            res = Interceptor.response({
              params,
              data: res
            })
            if (res.statusCode == 200) {
              return resolve(res)
            } else {
              res = Interceptor.responseError({
                params,
                data: res
              })
              return reject(res)
            }
          }).catch(error => {
            error = interceptor.responseError({
              params,
              data: error
            })
            return reject(error)
          })
      },
      fail(error) {
        error = interceptor.responseError({
          params,
          data: error
        })
        return reject(error)
      },
      complete() {}
    })
  })
}

/**
 * 检验Token
 * @param {*}} params 
 * @param {*} res 
 * @param {*} method 
 */
const checkToken = (params, res, method) => {
  if (res.statusCode == 401) {
    tokenErrorTimes += 1
  } else {
    tokenErrorTimes = 0
  }
  if (tokenErrorTimes >= 4) {
    return new Promise((resolve, reject) => {
      // Util.logout()
      reject({
        msg: '登录授权失败'
      })
    })
  } else {
    return new Promise((resolve, reject) => {
      resolve(res)
    })
    // return new Promise((resolve, reject) => {
    //   if (res.statusCode == 401) {
    //     let data = {}
    //     try {
    //       data.userNameOrEmailAddress = wx.getStorageSync('userNameOrEmailAddress')
    //     } catch (e) {
    //       data.userNameOrEmailAddress = ''
    //     }
    //     try {
    //       data.password = wx.getStorageSync('password')
    //     } catch (e) {
    //       data.password = ''
    //     }
    //     try {
    //       data.jsCode = wx.getStorageSync('jsCode')
    //     } catch (e) {
    //       data.jsCode = ''
    //     }
    //     wx.request({
    //       url: Api.API_AUTHENTICATE_BY_ACCOUNT,
    //       method: 'POST',
    //       data: data,
    //       header: {
    //         'content-type': 'application/json'
    //       },
    //       success(res) {
    //         try {
    //           wx.setStorageSync('accessToken', res.data.result.accessToken)
    //         } catch (e) { }
    //         let promise = null
    //         if (method == 'get') {
    //           promise = get(params)
    //         } else if (method == 'post') {
    //           promise = post(params)
    //         } else if (method == 'other') {
    //           promise = other(params)
    //         } else if (method == 'downloadFile') {
    //           promise = downloadFile(params)
    //         } else if (method == 'uploadFile') {
    //           promise = uploadFile(params)
    //         }
    //         promise.then(res => {
    //             resolve(res)
    //           })
    //           .catch(error => {
    //             reject(error)
    //           })
    //       },
    //       fail(error) {
    //         reject(error)
    //       },
    //       complete() {}
    //     })
    //   } else {
    //     resolve(res)
    //   }
    // })
  }
}

/**
 * 获取Header
 * @param {*} params 
 */
const getHeader = (params, isNull = false) => {
  let header = {}
  if (!params.header) {
    if (isNull) {
      header = null
    } else {
      header = {
        'content-type': 'application/json'
      }
    }
  } else {
    header = params.header
  }
  try {
    let accessToken = wx.getStorageSync('accessToken')
    if (accessToken) {
      header.authorization = Config.TOKEN_HEADER + accessToken
    }
    let sessionKey = wx.getStorageSync('sessionKey')
    if (sessionKey) {
      header.cookie = sessionKey
    }
  } catch (e) {}
  params.header = header
  return params
}

module.exports = {
  get: get,
  post: post,
  other: other,
  downloadFile: downloadFile,
  uploadFile: uploadFile
}