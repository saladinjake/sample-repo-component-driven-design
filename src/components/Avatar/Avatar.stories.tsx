import React from "react";

import { Svg } from "../../assets/svg";
import Avatar from "./Avatar";
import Flex from "../Flex";

const { CircleAvatar } = Svg;

export default {
  title: "Data Display/Avatar",
  component: Avatar,
};

export const Texts = () => {
  return (
    <Flex gap="20px 0" direction="column">
      {/* Small size */}
      <Avatar size="sm" type="text" text="A" />
      <Avatar size="sm" shape="rounded" type="text" text="B" />

      {/* medium size */}
      <Avatar
        size="md"
        type="text"
        text="C"
        backgroundColor="red"
        color="white"
      />
      <Avatar
        size="md"
        type="text"
        text="D"
        backgroundColor="green"
        color="white"
        shape="rounded"
      />

      {/* Large */}
      <Avatar
        size="lg"
        type="text"
        text="E"
        backgroundColor="blue"
        color="white"
      />
      <Avatar
        size="lg"
        type="text"
        text="F"
        backgroundColor="orange"
        color="white"
        shape="rounded"
      />
    </Flex>
  );
};

export const Images = () => {
  return (
    <Flex gap="20px 0" direction="column">
      {/* Small size */}
      <Avatar size="sm" type="image" src={CircleAvatar} />
      <Avatar size="sm" type="image" src={CircleAvatar} shape={"rounded"} />

      {/* Medium size */}
      <Avatar size="md" type="image" src={CircleAvatar} />
      <Avatar size="md" type="image" shape={"rounded"} src={CircleAvatar} />

      {/* Large size */}
      <Avatar size="lg" type="image" src={CircleAvatar} />
      <Avatar size="lg" type="image" shape={"rounded"} src={CircleAvatar} />
    </Flex>
  );
};

export const control = {
  args: {
    type: "text",
    text: "R",
  },
};
