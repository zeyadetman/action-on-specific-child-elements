import React from "react";
import { Collapse, Button } from "antd";

const { Panel } = Collapse;
const CustomCollapse = ({
  tabName,
  isDisable,
  subTabSelected,
  selectSubTab
}) => {
  return (
    <Collapse defaultActiveKey={[subTabSelected]} onChange={selectSubTab}>
      <Panel header="This is panel header 1" key="1">
        <Button type="primary" {...(isDisable ? { disabled: true } : {})}>
          {tabName} Panel 1
        </Button>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <Button type="primary">{tabName} Panel 2 (Don't Disable Me)</Button>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <div>
          <Button type="primary">{tabName} Panel 3 inside another div</Button>
        </div>
      </Panel>
    </Collapse>
  );
};

export default CustomCollapse;
