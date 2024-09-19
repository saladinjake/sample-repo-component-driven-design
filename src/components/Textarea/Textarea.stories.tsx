import React from "react";
import Textarea from "./Textarea";
import Flex from "../Flex/Flex";

export default {
  title: "Form/Textarea",
  component: Textarea,
};

export const Variant = () => {
  return (
    <Flex gap="20px" direction="column" width="100px">
      <Textarea placeholder="Write here" />
      <Textarea placeholder="Write here" disabled />
      <Textarea placeholder="Write here" error message="Some error occured" />
    </Flex>
  );
};

export const Control = {
  args: {},
};
