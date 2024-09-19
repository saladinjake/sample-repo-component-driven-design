import Tabs from "./Tabs";
import Tab from "./Tab";
import TabPanel from "./TabPanel";

export const tabProps = (identifier: string | number) => {
  return {
    id: `tab-${identifier}`,
    "aria-controls": `tabpanel-${identifier}`,
  };
};

export default Object.assign(Tabs, { Item: Tab, Panel: TabPanel });
