import React from "react";
import Input from "./Input";
import Flex from "../Flex/Flex";

export default {
  title: "Form/Input",
  component: Input,
};

export const Variant = () => {
  return (
    <Flex gap="20px" direction="column" width="100px">
      <Input tooltipText="The tooltip is here" />
      <Input
        hasSearch
        handleSearch={(v) => console.log({ v })}
        onKeyDown={(e) => {
          if (/^\D/.test(e.key) && e.key.length === 1 && e.key !== "+") {
            e.preventDefault();
            return;
          }
        }}
      />
      <Input disabled />
      <Input error message="Some error occured" />
    </Flex>
  );
};

export const Control = {
  args: {},
};
