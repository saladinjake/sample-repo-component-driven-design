import React from "react";
import Checkbox from "./";
import Flex from "../Flex";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
};

export const Default = () => {
  return (
    <Flex direction="column" gap="20px" height={"100vh"}>
      <Checkbox
        label="Checkbox A"
        disabled={false}
        name="approval"
        size={"sm"}
      />
      <Checkbox
        label="Checkbox B"
        disabled={false}
        name="approval"
        size={"md"}
      />
      <Checkbox
        label="Checkbox C"
        disabled={false}
        name="approval"
        size={"lg"}
      />
    </Flex>
  );
};

export const Control = {
  args: {},
};
