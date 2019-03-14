// Promise化小程序接口

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
 * Promise化小程序接口
 * @param {*} name
 * @param {*} opts
 */
const api = (name, opts) => {
  return new Promise((resolve, reject) => {
    let obj = { ...opts, ...{ success: resolve, fail: reject } }
    wx[name](obj)
  })
}

module.exports = {
  api: api
}
