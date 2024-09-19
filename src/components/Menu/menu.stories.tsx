import React, { useState } from "react";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import MenuItems from "./MenuItems";
import Box from "../Box/Box";
import Text from "../Text/Text";
import Flex from "../Flex/Flex";
import { CaretDown } from "../Select/svg";

export default {
  title: "Components/Menu",
  component: Menu,
};

export const Default = () => {
  const filterOptions = [
    { name: "first option", value: "1" },
    { name: "second option", value: "2" },
    { name: "third option", value: "3" },
  ];
  const [value, setValue] = useState("State");
  return (
    <Box width="170px" height="100vh">
      <Menu isLoading={false}>
        <MenuButton>
          {(setShowMenu) => (
            <Flex
              justifyContent="between"
              alignItems="center"
              onClick={() => setShowMenu((state) => !state)}
              border="1px solid #979797"
              p={"3"}
            >
              <Text>{value}</Text>
              <CaretDown />
            </Flex>
          )}
        </MenuButton>

        <MenuItems top="56px" width="150px">
          <Box px="4">
            {filterOptions.map((item) => (
              <Box
                key={item.name}
                py="3"
                border="1px solid #F4F4F4"
                cursor="pointer"
                onClick={() => {
                  setValue(item.name);
                }}
              >
                <Text fontSize="13px" fontWeight="600">
                  {item.name}
                </Text>
              </Box>
            ))}
          </Box>
        </MenuItems>
      </Menu>
    </Box>
  );
};
