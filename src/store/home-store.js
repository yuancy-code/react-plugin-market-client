/*
 * @Author: yuanchengyong 
 * @Date: 2020-02-04 15:25:00 
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-04 15:48:59
 * @Des: 
 */
import {
    observable,
    action
} from "mobx";
class HomeStore {
    @observable homeNum = 0;
    @action addNum() {
        this.homeNum += 1;
    }
    @action lessNum() {
        this.homeNum -= 1;
    }
}
export default HomeStore;