import React from "react";
import Status from "./Status";

export default {
  title: "Data Display/Status",
  component: Status,
};

export const Active = () => {
  return <Status text="Active" status="active" />;
};

export const Inactive = () => {
  return <Status text="Inactive" status="inactive" />;
};

export const pending = () => {
  return <Status text="Pending" status="pending" />;
};
