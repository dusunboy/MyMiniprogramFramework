/**
 * 小程序配置文件
 */

   //正式
//  const SITE_URL = "https://www.baidu.cn"
//测试
// const SITE_URL =  "https://www.baidu.cn"
// 开发
const SITE_URL = 'http://www.baidu.cn'

var config = {
  //Token前缀
  TOKEN_HEADER: "Bearer ",
  //header authenticate
  HEADER_AUTHENTICATE: "Authorization ",  
  //Api URL
  API_BASE: SITE_URL + "/api",
  //站点URL
  SITE_URL: SITE_URL,
  //每页记录数
  pageSize: 5 ,
  baseImageUrl: '../../image' ,
};

module.exports = config