import React, { useState, useRef, createContext, useContext, FC } from "react";
import Flex from "../Flex";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { SkeletonWrap } from "../Skeleton";
import { IMenuProps } from "./Menu.types";

const MenuContext = createContext({
  showMenu: false,
  setShowMenu: (value) => {},
  node: null,
});

const Menu: FC<IMenuProps> = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const node = useRef(null);
  const { children, isLoading, width = "100px" } = props;

  const handleClick = () => {
    setShowMenu(false);
  };

  useOnClickOutside(node, handleClick);

  return (
    <MenuContext.Provider
      value={{
        showMenu,
        setShowMenu,
        node,
      }}
      {...props}
    >
      {isLoading ? (
        <SkeletonWrap height="46px" width={width} />
      ) : (
        <Flex direction="column" position="relative">
          {children}
        </Flex>
      )}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);

export default Menu;
