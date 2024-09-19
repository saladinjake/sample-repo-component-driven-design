import React, { useState } from "react";
import Flex from "../Flex/Flex";
import { Select } from "../Select";
import Input from "./Input";
import { Period, PeriodInputProps } from "./Input.types";
import { PeriodInputWrapper } from "./Input.styles";

const PeriodInput: React.FC<PeriodInputProps> = ({
  label,
  value,
  onChange,
  required = false,
  error,
  message,
}) => {
  const initialPeriod: Period = {
    period: value?.period,
    value: value?.value,
  };
  const periodOptions = [
    { name: "Daily", value: "daily" },
    { name: "Weekly", value: "weekly" },
    { name: "Monthly", value: "monthly" },
    { name: "Yearly", value: "yearly" },
  ];
  const [period, setPeriod] = useState<Period>(initialPeriod);

  const updatePeriod = (value: Partial<Period>) => {
    const updatedValue = { ...period, ...value };
    setPeriod(updatedValue);
    onChange(updatedValue);
  };

  return (
    <PeriodInputWrapper>
      {label && (
        <>
          <label>
            {label}
            {required && <span>*</span>}
          </label>
          <div className="mb-10"></div>
        </>
      )}
      <Flex gap="4px">
        <Select
          error={error}
          value={period.period}
          width="184px"
          label={""}
          required={true}
          onChange={(v) =>
            updatePeriod({
              period: v.target.value,
            })
          }
          options={periodOptions}
        />
        <Input
          error={error}
          label=""
          width="184px"
          type="number"
          min={1}
          placeholder="Value"
          value={period.value?.toString() || ""}
          onChange={(value) => {
            updatePeriod({ value: parseInt(value) });
          }}
        />
      </Flex>
      {error && <span className="error">{message}</span>}
    </PeriodInputWrapper>
  );
};

export default PeriodInput;
