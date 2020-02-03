/*
 * @Author: yuanchengyong 
 * @Date: 2020-02-03 12:47:40 
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-03 12:48:30
 * @Des: 开发代理
 */
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/api', {
        target: 'http://localhost:3001/'
    }));
};