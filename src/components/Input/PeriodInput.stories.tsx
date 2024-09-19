import React from "react";
import PeriodInput from "./PeriodInput";

export default {
  title: "Form/PeriodInput",
  component: PeriodInput,
};

export const Default = () => {
  return (
    <PeriodInput
      onChange={(v) => {
        console.log({ v });
      }}
    />
  );
};

export const Control = {
  args: {
    value: {
      period: "monthly",
      value: 5,
    },
  },
};
