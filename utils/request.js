// 请求类

import interceptor from './interceptor'

//添加事件结束
Promise.prototype.finally = function(callback) {
  var Promise = this.constructor
  return this.then(
    function(value) {
      Promise.resolve(callback()).then(function() {
        return value
      })
    },
    function(reason) {
      Promise.resolve(callback()).then(function() {
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
const get = (url, data, header) => {
  if (!header) {
    header = {
      'content-type': 'application/json'
    }
  }
  if (interceptor.beforeRequest({ url, data, header })) {
    return new Promise((resolve, reject) => {
      return reject('取消请求')
    })
  }
  return new Promise((resolve, reject) => {
    Promise.prototype.requestTask = wx.request({
      url: url,
      method: 'GET',
      data: data,
      header: header,
      success(res) {
        res = interceptor.response({ url, data: res })
        if (res.statusCode == 200) {
          return resolve(res)
        } else {
          return reject(res)
        }
      },
      fail(error) {
        error = interceptor.responseError({ url, data: error })
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
const post = (url, data, header) => {
  if (!header) {
    header = {
      'content-type': 'application/json'
    }
  }
  if (interceptor.beforeRequest({ url, data, header })) {
    return new Promise((resolve, reject) => {
      return reject('取消请求')
    })
  }
  return new Promise((resolve, reject) => {
    Promise.prototype.requestTask = wx.request({
      url: url,
      method: 'POST',
      data: data,
      header: header,
      success(res) {
        res = interceptor.response({ url, data: res })
        if (res.statusCode == 200) {
          return resolve(res)
        } else {
          return reject(res)
        }
      },
      fail(error) {
        error = interceptor.responseError({ url, data: error })
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
const other = (url, data, header, method) => {
  if (!header) {
    header = {
      'content-type': 'application/json'
    }
  }
  if (interceptor.beforeRequest({ url, data, header, method })) {
    return new Promise((resolve, reject) => {
      return reject('取消请求')
    })
  }
  return new Promise((resolve, reject) => {
    Promise.prototype.requestTask = wx.request({
      url: url,
      method: method,
      data: data,
      header: header,
      success(res) {
        res = interceptor.response({ url, data: res })
        if (res.statusCode == 200) {
          return resolve(res)
        } else {
          return reject(res)
        }
      },
      fail(error) {
        error = interceptor.responseError({ url, data: error })
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
const downloadFile = (url, filePath, header) => {
  if (!header) {
    header = null
  }
  if (!filePath) {
    filePath = null
  }
  if (interceptor.beforeRequest({ url, filePath, header })) {
    return new Promise((resolve, reject) => {
      return reject('取消请求')
    })
  }
  return new Promise((resolve, reject) => {
    Promise.prototype.downloadTask = wx.downloadFile({
      url: url,
      header: header,
      filePath: filePath,
      success(res) {
        res = interceptor.response({ url, data: res })
        if (res.statusCode == 200) {
          return resolve(res)
        } else {
          return reject(res)
        }
      },
      fail(error) {
        error = interceptor.responseError({ url, data: error })
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
const uploadFile = (url, filePath, name, formData, header) => {
  if (!header) {
    header = null
  }
  if (!filePath) {
    filePath = null
  }
  if (!name) {
    name = null
  }
  if (!formData) {
    formData = null
  }
  if (interceptor.beforeRequest({ url, filePath, name, formData, header })) {
    return new Promise((resolve, reject) => {
      return reject('取消请求')
    })
  }
  return new Promise((resolve, reject) => {
    Promise.prototype.uploadTask = wx.uploadFile({
      url: url,
      header: header,
      filePath: filePath,
      name: name,
      formData: formData,
      success(res) {
        res = interceptor.response({ url, data: res })
        if (res.statusCode == 200) {
          return resolve(res)
        } else {
          return reject(res)
        }
      },
      fail(error) {
        error = interceptor.responseError({ url, data: error })
        return reject(error)
      },
      complete() {}
    })
  })
}

module.exports = {
  get: get,
  post: post,
  other: other,
  downloadFile: downloadFile,
  uploadFile: uploadFile
}
