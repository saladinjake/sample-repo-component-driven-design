import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ITabs } from "./Tabs.types";

import Flex from "../Flex";

import usePageActiveTab from "./hooks/usePageActiveTab";

const Tabs = ({
  children,
  value,
  onChange,
  withStorage = true,
  mx = "auto",
  gap = "0 30px",
  height = "48px",
  width = "95%",
}: ITabs) => {
  const { setPageActiveTab, getPageActiveTab, hasPageActiveTab } =
    usePageActiveTab();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string | number>("");

  const splitLocationPathName = location.pathname.split("/");

  useEffect(() => {
    if (withStorage && hasPageActiveTab(splitLocationPathName[1])) {
      setActiveTab(getPageActiveTab(splitLocationPathName[1]));
      onChange(getPageActiveTab(splitLocationPathName[1]));
      return;
    }

    setActiveTab(value);
  }, []);

  const handleChange = (identifier: string | number) => {
    onChange(identifier);
    setActiveTab(identifier);
    withStorage && setPageActiveTab(splitLocationPathName[1], identifier);
  };

  return (
    <Flex gap={gap} height={height} width={width} mx={mx}>
      {children.map((child) => ({
        ...child,
        props: { ...child.props, onChange: handleChange, activeTab },
      }))}
    </Flex>
  );
};

export default Tabs;
