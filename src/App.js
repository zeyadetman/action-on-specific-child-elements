import React, { useState, useRef, useEffect } from "react";
import { Tabs, Switch } from "antd";
import "antd/dist/antd.css";
import "./styles.css";
import CustomCollapse from "./customCollapse";
import AnotherCollapse from "./anotherCollapse";

const { TabPane } = Tabs;
export default function App() {
  const appRef = useRef(null);
  const [isEnabled, setEnable] = useState(true);
  const [tabSelected, selectTab] = useState("1");
  const [subTabSelected, selectSubTab] = useState("1");
  useEffect(() => {
    const btns = appRef.current.getElementsByTagName("button");
    for (let btn of btns) {
      if (!isEnabled) btn.disabled = true;
      else if (isEnabled) btn.disabled = false;
    }
  }, [tabSelected, subTabSelected, isEnabled]);
  return (
    <>
      <Switch
        checkedChildren="buttons enabled"
        unCheckedChildren="buttons disabled"
        onChange={setEnable}
        defaultChecked={isEnabled}
      />
      <div ref={appRef}>
        <Tabs defaultActiveKey={[tabSelected]} onChange={selectTab}>
          <TabPane tab="Tab 1" key="1">
            <CustomCollapse
              subTabSelected={subTabSelected}
              selectSubTab={selectSubTab}
              tabName="Tab 1"
            />
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            <CustomCollapse
              subTabSelected={subTabSelected}
              selectSubTab={selectSubTab}
              tabName="Tab 2"
            />
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            <AnotherCollapse
              subTabSelected={subTabSelected}
              selectSubTab={selectSubTab}
              tabName="Tab 3"
            />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
}
