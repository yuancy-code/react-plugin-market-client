/*
 * @Author: yuanchengyong 
 * @Date: 2020-02-04 16:16:24 
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-04 16:33:38
 * @Des: 公共store
 */
import {
    observable
} from "mobx";
class PubStore {
    @observable breadcrumb = [{
            key: "home",
            name: "首页"
        },
        {
            key: "list",
            name: "列表"
        }
    ];
}
export default PubStore;