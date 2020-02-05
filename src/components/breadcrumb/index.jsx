/*
 * @Author: yuanchengyong
 * @Date: 2020-02-04 16:15:40
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-04 16:33:17
 * @Des:
 */

import React from "react";
import { Breadcrumb } from "antd";
import { observer, inject } from "mobx-react";

@inject("pubStore")
@observer
class BreadcrumbComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  render() {
    const breadcrumbList = this.props.pubStore.breadcrumb;
    return (
      <Breadcrumb style={{ margin: "16px 0" }}>
        {breadcrumbList.map((item,i) => {
          return (
            <Breadcrumb.Item key={item.key}>{item.name}</Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    );
  }
}
export default BreadcrumbComp;
