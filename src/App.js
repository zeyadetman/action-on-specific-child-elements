import React, { useRef, useEffect } from "react";
import { Tabs, Switch } from "antd";
import "antd/dist/antd.css";
import "./styles.css";
import CustomCollapse from "./customCollapse";
import AnotherCollapse from "./anotherCollapse";

const { TabPane } = Tabs;
export default function App() {
  const conta = useRef(null);

  useEffect(() => {
    const cotaninerRef = conta.current;
    // for(let x of containerRef)
  }, []);
  return (
    <>
      <Switch
        checkedChildren="buttons enabled"
        unCheckedChildren="buttons disabled"
        onChange={console.log}
        defaultChecked
      />
      <Tabs defaultActiveKey="1" onChange={() => {}}>
        <TabPane tab="Tab 1" key="1">
          <CustomCollapse tabName="Tab 1" />
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
