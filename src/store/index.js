/*
 * @Author: yuanchengyong 
 * @Date: 2020-02-04 15:24:57 
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-04 16:19:21
 * @Des: 
 */
import HomeStore from "./home-store";
import ListStore from "./list-store";
import PubStore from "./pub-store";
let homeStore = new HomeStore();
let listStore = new ListStore();
let pubStore = new PubStore();

const stores = {
    homeStore,
    listStore,
    pubStore
};
/// 默认导出接口
export default stores;