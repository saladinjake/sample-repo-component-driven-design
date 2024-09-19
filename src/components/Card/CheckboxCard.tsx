import React, { useEffect, useState } from "react";
import { StyledCard } from "./Card.styles";
import Flex from "../Flex/Flex";
import Text from "../Text/Text";
import Box from "../Box/Box";
import Checkbox from "../Checkbox";
import { ICheckboxCardProps } from "./Card.types";

const CheckboxCard: React.FC<ICheckboxCardProps> = ({
  title,
  description,
  color = "#40196D",
  width = "319px",
  disabled = false,
  checked = false,
  onChange,
}) => {
  const [isChecked, toggleCheck] = useState<boolean>(checked);

  const switchState = () => {
    toggleCheck(!isChecked);
    onChange({ target: { checked: isChecked } });
  };

  useEffect(() => {
    if (checked !== isChecked) toggleCheck(checked);
  }, [checked]);
  return (
    <StyledCard width={width} height="65px">
      <Flex gap="10px" width="100%">
        <Checkbox
          onChange={onChange}
          color={color}
          disabled={disabled}
          checked={isChecked}
        />
        <Box
          width="85%"
          onClick={disabled ? () => null : switchState}
          cursor={disabled ? "not-allowed" : "pointer"}
        >
          <Text
            color={!disabled ? color : "#9F8CB6"}
            fontWeight="700"
            as={"p"}
            fontSize="14px"
            my={"0"}
            className="ellipsis"
          >
            {title}
          </Text>
          {description && (
            <>
              <Box height={"5px"}></Box>
              <Text fontSize="12px" my={"0"} color={"#979797"} as={"p"}>
                {description}
              </Text>
            </>
          )}
        </Box>
      </Flex>
    </StyledCard>
  );
};

export default CheckboxCard;
