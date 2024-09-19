import React from "react";
import { ProfileCardWrapper } from "./Card.styles";
import Avatar from "../Avatar/Avatar";
import { Svg } from "../../assets/svg";
import Text from "../Text/Text";
import libraryConfig from "../../libraryConfig";
import Box from "../Box/Box";
import Flex from "../Flex/Flex";
import { Logout, Person, QuestionMark } from "./svg";
import { ProfileCardProps } from "./Card.types";

const { colors } = libraryConfig;

const InfoIcon = ({ onClick }) => (
  <svg
    onClick={onClick}
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.54337 9.63985V5.94704H7.45744V9.63985H6.54337ZM6.49219 5.25235V4.36023H7.50862V5.25235H6.49219Z"
      fill="white"
    />
    <rect
      x="2.15625"
      y="2.15625"
      width="9.6875"
      height="9.6875"
      rx="4.84375"
      stroke="#F9F9F9"
      stroke-width="0.8125"
    />
  </svg>
);

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  email,
  role,
  handleRoleDisplay,
  handleProfileDisplay,
  handleLogout,
}) => {
  return (
    <ProfileCardWrapper>
      <div className="details">
        <Avatar size="md" type="image" src={Svg.CircleAvatar} shape="rounded" />
        <Text
          color={colors.kWhite500}
          fontSize="14px"
          fontWeight="700"
          mt={"3"}
          mb={"2"}
        >
          {name}
        </Text>
        <Text color={colors.kBlack300} fontSize="10px" mt={"2"}>
          {email}
        </Text>
        <Box mt={"5"}></Box>
        <Flex alignItems="center" gap="7px">
          <Text fontSize="10px" color={colors.kWhite500}>
            {role}
          </Text>
          <InfoIcon onClick={handleRoleDisplay} />
        </Flex>
      </div>
      <div className="cta-wrapper">
        <Flex gap="8px" p={"3"} cursor="pointer">
          <Person />
          <Text fontSize="13px" fontWeight="500" onClick={handleProfileDisplay}>
            My profile
          </Text>
        </Flex>
        <Flex gap="8px" p={"3"} cursor="pointer">
          <Logout />
          <Text fontSize="13px" fontWeight="500" onClick={handleLogout}>
            Logout
          </Text>
        </Flex>
      </div>
    </ProfileCardWrapper>
  );
};

export default ProfileCard;
