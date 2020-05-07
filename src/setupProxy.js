/*
 * @Author: yuanchengyong
 * @Date: 2020-02-03 12:47:40
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-05-07 22:28:46
 * @Des: 开发代理
 */
const {
    createProxyMiddleware
} = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        target: 'http://localhost:3001/'
    }));
};