import React from "react";
import { ITabPanelProps } from "./Tabs.types";

const identifierChecker = (identifier: any, value: string | number) => {
  if (Array.isArray(identifier)) {
    return identifier.includes(value);
  }

  return value === identifier;
};

const TabPanel = (props: ITabPanelProps) => {
  const { children, value, identifier, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={!identifierChecker(identifier, value)}
      id={`tabpanel-${identifier}`}
      aria-labelledby={`tab-${identifier}`}
      {...other}
    >
      {identifierChecker(identifier, value) && children}
    </div>
  );
};

export default TabPanel;
