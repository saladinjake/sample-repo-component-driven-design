import React, { useEffect, useState } from "react";
import MultiSelect from "./MultiSelect";

export default {
  title: "Form/MultiSelect",
  component: MultiSelect,
};

const options = [
  { name: "Option 1", value: "quality assurance a", id: "1", rand: 1 },
  { name: "Option 2", value: "quality assurance b", id: "2", rand: 2 },
  { name: "Option 3", value: "quality assurance c", id: "3", rand: 3 },
  { name: "Option 4", value: "quality assurance d", id: "4", rand: 4 },
  { name: "Option 5", value: "quality assurance e", id: "5", rand: 5 },
  { name: "Option sub 5", value: "quality assurance f", id: "6", rand: 6 },
  {
    name: "Option with short 5",
    value: "quality assurance j",
    id: "7",
    rand: 7,
  },
  {
    name: "Option with another 6",
    value: "quality assurance f",
    id: "8",
    rand: 8,
  },
  { name: "Option with  6", value: "quality assurance l", id: "9", rand: 9 },
];

export const Multi = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [currentOptions, setCurrentOptions] = useState<any>([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setCurrentOptions(options);
    }, 1000);
  }, []);

  return (
    <MultiSelect
      hasSearch
      name="options"
      values={options.slice(0, 3)}
      onChange={(v) => {
        console.log("New values: ", v);
      }}
      disabledOptions={["quality assurance f"]}
      valueArg={"name"}
      options={currentOptions}
      variant="outline"
      isLoading={isLoading}
    />
  );
};

export const MultiControl = {
  args: {
    options,
    values: [],
  },
};
