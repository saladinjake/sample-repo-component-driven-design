import React, { useState } from "react";
import Tabs, { tabProps } from "./";
import Flex from "../Flex";
import Box from "../Box";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/Tabs",
  component: Tabs,
};

const FirstComponent = () => (
  <div>
    <p>This is the content of the first tab</p>
  </div>
);

const SecondComponent = () => (
  <div>
    <p>This is the content of the second tab</p>
  </div>
);

const ThirdComponent = () => (
  <div>
    <p>This is the content of the third tab</p>
  </div>
);

export const Default = () => {
  const tabs = [
    { name: "First Tab has something this long", slug: 1 },
    { name: "Second Tab ", slug: 2 },
    { name: "Third Tab", slug: 3 },
  ];
  const [activeTab, setActiveTab] = useState<number | string>(1);

  const handleTabChange = (slug: number | string) => {
    setActiveTab(slug);
  };
  return (
    <MemoryRouter>
      <Flex
        borderBottomColor="#DBDCE0"
        borderWidth="1px"
        borderBottomStyle="solid"
        width="100%"
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="basic tabs example"
          withStorage={false}
          gap="0 40px"
        >
          {tabs.map((tab) => (
            <Tabs.Item
              label={tab.name}
              identifier={tab.slug}
              {...tabProps(tab.slug)}
              px="8"
            />
          ))}
        </Tabs>
      </Flex>

      <Box mx="auto" mt="4">
        <Tabs.Panel value={activeTab} identifier={1}>
          <FirstComponent />
        </Tabs.Panel>

        <Tabs.Panel value={activeTab} identifier={2}>
          <SecondComponent />
        </Tabs.Panel>

        <Tabs.Panel value={activeTab} identifier={3}>
          <ThirdComponent />
        </Tabs.Panel>
      </Box>
    </MemoryRouter>
  );
};
