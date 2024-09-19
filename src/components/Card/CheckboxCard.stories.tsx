import React, { useState } from "react";
import CheckboxCard from "./CheckboxCard";

export default {
  title: "Components/Card",
  component: CheckboxCard,
};

export const Checkbox = () => {
  const [isChecked, toggleCheck] = useState<boolean>(false);
  const [isCheckedB, toggleCheckB] = useState<boolean>(false);
  return (
    <>
      <CheckboxCard
        title="Accept Check A"
        description={"The description of what to accept"}
        onChange={() => toggleCheck(!isChecked)}
        checked={isChecked}
      />
      <CheckboxCard
        title="Accept Check B"
        description={"The description of what to accept"}
        onChange={() => toggleCheck(!isChecked)}
        checked={isCheckedB}
        disabled
      />
    </>
  );
};

export const CheckboxControl = {
  args: {
    title: "Some check",
    description: "More detail to check",
  },
};
