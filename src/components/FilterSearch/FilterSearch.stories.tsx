import React, { useEffect, useState } from "react";
import FilterSearch from "./FilterSearch";
import { FilterOption } from "./FilterSearch.types";
import Flex from "../Flex";

export default {
  title: "Components/FilterSearch",
  component: FilterSearch,
};

const searchFilterOptions: FilterOption[] = [
  { name: "Filter By", value: "" },
  { name: "Function Name", value: "functionName" },
  { name: "Queue ID", value: "queueId" },
  { name: "going new", value: "queueId" },
];

export const Default = () => {
  const [currentFilterOption, setFilterOption] = useState<FilterOption>(
    searchFilterOptions[0]
  );
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <Flex gap="20px" direction="column" height={"100vh"}>
      {/* With filter dropdown */}
      <FilterSearch
        filterOptions={searchFilterOptions}
        filterBy={currentFilterOption}
        setFilterBy={setFilterOption}
        placeholder="Search by filter"
        value=""
        onSearch={(v) => null}
        isLoading={isLoading}
        onClear={() => console.log("Its cleared")}
        dropdownWidth="200px"
      />

      {/* Without filter dropdown */}
      <FilterSearch
        hasFilter={false}
        onSearch={(v) => null}
        disabled
        isLoading={isLoading}
      />
    </Flex>
  );
};

export const Control = {
  args: {
    filterOptions: searchFilterOptions,
    width: "319px",
  },
};
