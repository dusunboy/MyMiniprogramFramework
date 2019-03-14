// 请求拦截类

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

module.exports = {
  beforeRequest: beforeRequest,
  response: response,
  responseError: responseError
}
