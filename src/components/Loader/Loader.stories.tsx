import React from "react";
import Loader from "./Loader";
import Box from "../Box/Box";
import LogoLoader from "./LogoLoader";
import Flex from "../Flex/Flex";
import Spinner from "./Spinner";

export default {
  title: "Feedback/Loader",
  component: Loader,
};

export const Default = () => {
  return (
    <Flex height={"100vh"} gap="20px" direction="column">
      <Loader color="black" />
      <Loader color="purple" />
    </Flex>
  );
};

export const Sizes = () => {
  return (
    <Flex height={"100vh"} gap="20px" direction="column">
      <Loader size="sm" />
      <Loader size="md" />
      <Loader size="lg" />
    </Flex>
  );
};

export const Logo = () => {
  return (
    <Box>
      <LogoLoader />
    </Box>
  );
};

export const Spin = () => (
  <Flex direction="column" gap="15px">
    <Spinner color="purple" />
    <Spinner color="blue" size="md" />
    <Spinner color="red" size="lg" />
  </Flex>
);

export const Control = {
  args: {},
};
