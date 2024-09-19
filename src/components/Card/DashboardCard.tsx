import React from "react";
import Card from "./Card";
import Text from "../Text/Text";
import { IDashboardCardProps } from "./Card.types";
import libraryConfig from "../../libraryConfig";
import Box from "../Box/Box";

const { colors } = libraryConfig;

const DashboardCard: React.FC<IDashboardCardProps> = ({
  title,
  value,
  color,
  width,
  height,
}) => {
  return (
    <Card width={width} height={height}>
      <Box>
        <Text fontSize="13px">{title}</Text>
        <Box height={"6px"}></Box>
        <Text
          color={color || colors.kPurple500}
          fontSize="20px"
          fontWeight="800"
        >
          {value}
        </Text>
      </Box>
    </Card>
  );
};

export default DashboardCard;
