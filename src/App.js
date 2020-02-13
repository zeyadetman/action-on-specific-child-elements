import React, { useState } from "react";
import { Tabs, Switch } from "antd";
import "antd/dist/antd.css";
import "./styles.css";
import CustomCollapse from "./customCollapse";
import AnotherCollapse from "./anotherCollapse";

const { TabPane } = Tabs;
export default function App() {
  const [isDisable, setDisable] = useState(false);
  return (
    <>
      <Switch
        checkedChildren="buttons disabled"
        unCheckedChildren="buttons enabled"
        onChange={setDisable}
        defaultChecked={isDisable}
      />
      <Tabs defaultActiveKey="1" onChange={() => {}}>
        <TabPane tab="Tab 1" key="1">
          <CustomCollapse tabName="Tab 1" isDisable={isDisable} />
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <CustomCollapse tabName="Tab 2" />
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          <AnotherCollapse tabName="Tab 3" />
        </TabPane>
      </Tabs>
    </>
  );
}
