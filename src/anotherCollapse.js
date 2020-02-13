import React from "react";
import { Collapse, Button } from "antd";

const { Panel } = Collapse;
const AnotherCollapse = ({ tabName, subTabSelected, selectSubTab }) => {
  return (
    <>
      <Button type="primary" style={{ marginBottom: 10 }}>
        Button Another Collapse
      </Button>
      <Collapse defaultActiveKey={[subTabSelected]} onChange={selectSubTab}>
        <Panel header="This is panel header 2" key="2">
          <Button type="primary">{tabName} Panel 2</Button>
        </Panel>
      </Collapse>
    </>
  );
};

export default AnotherCollapse;
