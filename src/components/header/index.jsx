/*
 * @Author: yuanchengyong
 * @Date: 2020-02-04 15:56:21
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-04 16:13:34
 * @Des:
 */
import React from "react";
import { Layout, Modal, Icon } from "antd";
import http from "@http";
import { observer, inject } from "mobx-react";
const { Header } = Layout;

@inject("homeStore")
@observer
class HeaderComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  async componentDidMount() {
    try {
      let { resultCode, data } = await http.get("/user/info");
      if (resultCode === "0000") {
        this.setState({ user: data });
      } else {
        console.log(window.location.hash);
        if (window.location.hash === "#/login") {
          return false;
        }
        Modal.warning({
          title: "请登录",
          content: "请登录后再继续使用该系统！",
          onOk: () => {
            window.location.hash = "#/login";
          }
        });
      }
    } catch (e) {}
  }
  render() {
    const { nickName } = this.state.user;
    return (
      <Header className="header">
        <div className="logo">My System</div>
        <div className="user-info">
          <Icon type="user" />
          <span className="user-name">{nickName}</span>
        </div>
      </Header>
    );
  }
}
export default HeaderComp;
