import React from "react";
import Indicator from "./";

export default {
  title: "Feedback/Indicator",
  component: Indicator,
};

export const Default = () => {
  return (
    <Indicator
      title="Active"
      indicatorClass="online-indicator"
      blinkClass="blink"
      onClick={() => console.log("Indicator")}
    />
  );
};

export const Control = {
  args: {},
};
