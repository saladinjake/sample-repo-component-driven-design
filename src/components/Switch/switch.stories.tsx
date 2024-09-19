import React, { useState } from "react";
import Flex from "../Flex/Flex";
import Switch from "./";
import Text from "../Text/Text";

export default {
  title: "Form/Switch",
  component: Switch,
};

export const Default = () => {
  const [selected, toggleSwitch] = useState<boolean>(true);
  const [selectedB, toggleSwitchB] = useState<boolean>(true);
  const [selectedC, toggleSwitchC] = useState<boolean>(false);

  return (
    <Flex gap="20px" direction="column">
      <Flex gap="10px" alignItems="center">
        <Switch
          value={selected}
          onChange={() => toggleSwitch((val) => !val)}
          disabled={false}
        />
        <Text mt={"4"}>Active</Text>
      </Flex>
      <Flex gap="10px" alignItems="center">
        <Switch
          value={selectedB}
          onChange={() => toggleSwitchB((val) => !val)}
          disabled={false}
          state="destructive"
        />
        <Text mt={"4"}>Destructive</Text>
      </Flex>
      <Switch
        value={selectedC}
        onChange={() => toggleSwitchC((val) => !val)}
        disabled={true}
      />
    </Flex>
  );
};

export const Sizes = () => {
  const [selected, toggleSwitch] = useState<boolean>(true);
  const [selectedB, toggleSwitchB] = useState<boolean>(true);
  const [selectedC, toggleSwitchC] = useState<boolean>(false);

  return (
    <Flex gap="20px" direction="column">
      <Flex gap="10px" alignItems="center">
        <Switch
          value={selected}
          onChange={() => toggleSwitch((val) => !val)}
          disabled={false}
          size="sm"
          color="blue"
        />
        <Text mt={"4"}>Active</Text>
      </Flex>
      <Flex gap="10px" alignItems="center">
        <Switch
          value={selectedB}
          onChange={() => toggleSwitchB((val) => !val)}
          disabled={false}
          state="destructive"
          size="md"
        />
        <Text mt={"4"}>Destructive</Text>
      </Flex>
      <Switch
        value={selectedC}
        onChange={() => toggleSwitchC((val) => !val)}
        // disabled={true}
        size="lg"
      />
    </Flex>
  );
};

export const Colours = () => {
  const [selected, toggleSwitch] = useState<boolean>(true);
  const [selectedB, toggleSwitchB] = useState<boolean>(true);
  const [selectedC, toggleSwitchC] = useState<boolean>(false);

  return (
    <Flex gap="20px" direction="column">
      <Flex gap="10px" alignItems="center">
        <Switch
          value={selected}
          onChange={() => toggleSwitch((val) => !val)}
          disabled={false}
          color="blue"
        />
        <Text mt={"4"}>Blue</Text>
      </Flex>
      <Flex gap="10px" alignItems="center">
        <Switch
          value={selectedB}
          onChange={() => toggleSwitchB((val) => !val)}
          disabled={false}
          color="black"
        />
        <Text mt={"4"}>Black</Text>
      </Flex>
      <Flex gap="10px" alignItems="center">
        <Switch
          value={selectedC}
          onChange={() => toggleSwitchC((val) => !val)}
          disabled={false}
          color="green"
        />
        <Text mt={"4"}>Green</Text>
      </Flex>
    </Flex>
  );
};

export const Control = {
  args: {},
};
