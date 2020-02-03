/*
 * @Author: yuanchengyong 
 * @Date: 2020-02-03 12:22:44 
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-03 13:18:42
 * @Des: Http请求
 */
import axios from "axios";
import config from "./config";
const instance = axios.create(config);
const Http = {
    ...instance,
    get: async (conf) => {
        let result = await instance.get(conf);
        return result.data;
    },
    post: async (conf) => {
        let result = await instance.get(conf);
        return result.data;
    }
}
export default Http