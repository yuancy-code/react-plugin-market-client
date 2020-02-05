/*
 * @Author: yuanchengyong
 * @Date: 2020-01-13 09:46:07
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-04 16:24:58
 */
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import routes from "./routes";
import "./App.less";
import { Layout, Menu, Icon } from "antd";
import { Provider } from "mobx-react";
import stores from "./store";
import Header from "./components/header";
import Breadcrumb from "./components/breadcrumb";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <Provider {...stores}>
          <Router>
            <Layout>
              <Header />
              <Layout className="container">
                <Sider
                  width={200}
                  style={{ background: "#fff", overflow: "auto" }}
                >
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    // defaultOpenKeys={['userCenter']}
                    style={{ height: "100%", borderRight: 0 }}
                  >
                    <Menu.Item key="1">
                      <Link to="/index">
                        <Icon type="home" />
                        Home
                      </Link>
                    </Menu.Item>
                    <SubMenu
                      key="userCenter"
                      title={
                        <span>
                          <Icon type="user" />
                          User Center
                        </span>
                      }
                    >
                      <Menu.Item key="2">
                        <Link to="/user">User</Link>
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="list"
                      title={
                        <span>
                          <Icon type="unordered-list" />
                          List View
                        </span>
                      }
                    >
                      <Menu.Item key="3">
                        <Link to="/list">List</Link>
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="detail"
                      title={
                        <span>
                          <Icon type="layout" />
                          Detail View
                        </span>
                      }
                    >
                      <Menu.Item key="4">
                        <Link to="/detail">Detail</Link>
                      </Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
                <Layout style={{ padding: "0 24px 24px" }}>
                  <Breadcrumb></Breadcrumb>
                  <Content
                    style={{
                      background: "#fff",
                      padding: 24,
                      margin: 0,
                      minHeight: 280,
                      overflow: "auto"
                    }}
                  >
                    <Switch>
                      <Redirect from="/" exact to="/index" />
                      {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                      ))}
                    </Switch>
                  </Content>
                </Layout>
              </Layout>
            </Layout>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
