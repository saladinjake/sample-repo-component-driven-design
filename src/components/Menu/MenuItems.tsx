import React from "react";
import { useMenu } from "./Menu";
import { IMenuItemsProps } from "./Menu.types";
import { StyledMenuItems } from "./Menu.styles";

const MenuItems = (props: IMenuItemsProps) => {
  const { children, width = "100%", top, right, left, bottom } = props;
  const { showMenu, node, setShowMenu } = useMenu();

  return showMenu ? (
    <StyledMenuItems
      ref={node}
      width={width}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      onClick={() => setShowMenu(false)}
    >
      {children}
    </StyledMenuItems>
  ) : null;
};

export default MenuItems;
