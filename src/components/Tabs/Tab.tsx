import React from "react";
import Text from "../Text";
import Flex from "../Flex";

const Tab = (props) => {
  const { label, children, activeTab, identifier, onChange, ...rest } = props;

  return (
    <Flex
      as="button"
      alignItems="center"
      justify-content="start"
      border="none"
      borderWidth="2px"
      borderBottomStyle="solid"
      borderBottomColor={identifier === activeTab ? "#40196D" : "#fff"}
      transition="all 0.2s ease-in-out"
      height="100%"
      cursor="pointer"
      backgroundColor="transparent"
      onClick={() => onChange(identifier)}
      py="5"
      px="2"
      {...rest}
    >
      {label ? (
        <Text fontSize={"15px"} fontWeight="700">
          {label}
        </Text>
      ) : (
        children
      )}
    </Flex>
  );
};

export default Tab;
