import React from "react";
import { useMenu } from "./Menu";
import { IMenuButtonProps } from "./Menu.types";
import { StyledMenuButton } from "./Menu.styles";

const MenuButton = (props: IMenuButtonProps) => {
  const { children } = props;
  const { setShowMenu } = useMenu();

  if (typeof children === "function") return children(setShowMenu);

  return (
    <StyledMenuButton
      type="button"
      onClick={() => setShowMenu((state) => !state)}
    >
      {children}
    </StyledMenuButton>
  );
};

export default MenuButton;
