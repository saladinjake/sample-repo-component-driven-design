import React, { useEffect, useState } from "react";
import Select from "./Select";
import Flex from "../Flex/Flex";
import Input from "../Input/Input";

export default {
  title: "Form/Select",
  component: Select,
};

export const DropDown = () => {
  const [options, setOptions] = useState<Record<string, string>[]>([]);

  useEffect(() => {
    // simulate server side data fetch and optipns list update
    setTimeout(
      () =>
        setOptions([
          { name: "Quality Assurance" },
          { name: "Super Administrator" },
        ]),
      5000
    );
  }, []);

  const onBlur = (e) => {
    console.log("blurred")
  }

  const onFocus = (e) => {
    console.log("Focus event")
  }

  return (
    <Flex gap="20px" direction="column">
      <Select
      tooltipText="hello tooltips"
        hasSearch
        label="User Role"
        onChange={(e) => {
          console.log({ e });
        }}
        onBlur={onBlur}
        onFocus={onFocus}
        valueArg={"name"}
        options={[
          {
            name: "Quality Assurance has a very long description and continues to work",
            value: "quality assurance",
            id: "5",
            rand: 4,
          },
          {
            name: "Super Administrator",
            value: "super admin",
            id: "8",
            rand: 9,
          },
        ]}
        value={"Super Administrator"}
      />
      <Select
        onChange={(e) => null}
        valueArg={"name"}
        options={options}
        variant="outline"
      />
      <Select
        disabled
        label="User Role"
        onChange={(e) => null}
        valueArg={"name"}
        options={[
          { name: "Quality Assurance" },
          { name: "Super Administrator" },
        ]}
      />
      <Input disabled />
    </Flex>
  );
};

export const Control = {
  args: {
    options: [{ name: "Quality Assurance" }, { name: "Super Administrator" }],
  },
};
