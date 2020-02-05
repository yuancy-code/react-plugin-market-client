/*
 * @Author: yuanchengyong 
 * @Date: 2020-02-04 15:25:04 
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-04 15:30:06
 * @Des: 
 */
import {
    observable
} from "mobx";
class OneStore {
    @observable oneNum = 3333;
}
export default OneStore;