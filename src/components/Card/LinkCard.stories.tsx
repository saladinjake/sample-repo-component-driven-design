import React from "react";
import LinkCard from "./LinkCard";
import { MemoryRouter } from "react-router-dom";
import Flex from "../Flex/Flex";
import { Svg } from "../../assets/svg";

export default {
  title: "Components/Card",
  component: LinkCard,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Link = () => {
  return (
    <Flex direction="column" gap="15px">
      <LinkCard title="Link to some page without icon" link="/link" disabled />
      <LinkCard
        title="Link to some page with icon"
        link="/link"
        Icon={<img src={Svg.Info} />}
      />
      <LinkCard
        title="Link to some page with icon"
        description="This is the description here"
        link="/link"
        Icon={<img src={Svg.Info} />}
      />
    </Flex>
  );
};

export const LinkControl = {
  args: {
    title: "Link to some page",
    link: "/",
  },
};
