import React from "react";
import Radio from "./Radio";
import Flex from "../Flex";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "Form/Radio",
  component: Radio,
};

export const Default = () => {
  return (
    <Flex direction="column" gap="20px" height={"50vh"}>
      <Flex direction="row" gap="20px" height={"max-content"}>
        <Radio
          label="Line 1 - Radio A"
          value="radioA"
          disabled={true}
          name="approval"
          size={"sm"}
        />
        <Radio
          label="Line 1 - Radio B"
          value="radioB"
          disabled={false}
          name="approval"
          size={"md"}
        />
        <Radio
          label="Line 1 - Radio C"
          value="radioC"
          disabled={false}
          name="approval"
          size={"lg"}
        />
      </Flex>
      <Flex direction="row" gap="20px" height={"max-content"}>
        <Radio
          label="Line 2 - Radio A"
          value="radioA"
          disabled={false}
          name="approval"
          size={"sm"}
        />
        <Radio
          label="Line 2 - Radio B"
          value="radioB"
          disabled={false}
          name="approval"
          size={"md"}
        />
        <Radio
          label="Line 2 - Radio C"
          value="radioC"
          disabled={false}
          name="approval"
          size={"lg"}
        />
      </Flex>
    </Flex>
  );
};
export const Check = () => {
  return (
    <Flex direction="column" gap="20px" height={"100vh"}>
      <Radio
        label="Radio A"
        value="radioA"
        disabled={false}
        name="approval"
        type="check"
        size={"sm"}
      />
      <Radio
        label="Radio B"
        value="radioB"
        disabled={false}
        name="approval"
        size={"md"}
        type="check"
      />
      <Radio
        label="Radio C"
        value="radioC"
        disabled={false}
        name="approval"
        size={"lg"}
        type="check"
      />
    </Flex>
  );
};

export const Colors = () => {
  return (
    <Flex direction="column" gap="20px" height={"100vh"}>
      <Radio
        label="Radio A"
        value="radioA"
        disabled={false}
        name="approval"
        type="check"
        size={"sm"}
        radioButtonColor="green"
      />
      <Radio
        label="Radio B"
        value="radioB"
        disabled={false}
        name="approval"
        size={"md"}
        type="check"
        radioButtonColor="blue"
      />
      <Radio
        label="Radio C"
        value="radioC"
        disabled={false}
        name="approval"
        size={"lg"}
        type="check"
      />
    </Flex>
  );
};

type Story = StoryObj<typeof Radio>;
export const Control: Story = {
  args: {},
};
export default meta;
