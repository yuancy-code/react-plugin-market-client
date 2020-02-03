/*
 * @Author: yuanchengyong
 * @Date: 2020-01-14 15:51:18
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-03 18:46:39
 */
import React from "react";
import http from "@http";
import { Table, Button } from "antd";

const columns = [
  {
    title: "担保合同号",
    width: 140,
    dataIndex: "number",
    key: "number",
    fixed: "left"
  },
  {
    title: "担保合同名称",
    width: 140,
    dataIndex: "name",
    key: "name",
    fixed: "left"
  },
  {
    title: "担保企业名称",
    dataIndex: "compName",
    key: "compName",
    width: 180
  },
  {
    title: "被担保企业名称",
    dataIndex: "compName2",
    key: "compName2",
    width: 180
  },
  {
    title: "担保责任范围",
    dataIndex: "range",
    key: "range",
    width: 150
  },
  {
    title: "担保形式",
    dataIndex: "type",
    key: "type",
    width: 150
  },
  {
    title: "担保起始日",
    dataIndex: "time",
    key: "time",
    width: 220
  },
  {
    title: "担保金额",
    dataIndex: "amount",
    key: "amount",
    align: "right",
    width: 150
  },
  {
    title: "履约状态",
    dataIndex: "performance",
    key: "performance",
    width: 150
  },
  { title: "状态", dataIndex: "status", key: "status" },
  {
    title: "操作",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => {
      return (
        <div>
          {" "}
          <Button type="link">删除</Button>
        </div>
      );
    }
  }
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  }
};

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false
    };
  }
  async componentDidMount() {
    this.setState({
      loading: true
    });
    try {
      let { resultCode, data } = await http.get("/list");
      if (resultCode === "0000") {
        this.setState({
          data,
          loading: false
        });
      }
    } catch (e) {}
  }
  render() {
    const { loading, data } = this.state;
    return (
      <Table
        columns={columns}
        loading={loading}
        rowSelection={rowSelection}
        dataSource={data}
        scroll={{ x: 1760 }}
      />
    );
  }
}

export default List;
