import React from "react";
import DashboardCard from "./DashboardCard";

export default {
  title: "Components/Card",
  component: DashboardCard,
};

export const Dashboard = {
  args: {
    title: "Some Metrics",
    value: "5000",
    width: {
      sm: {width: "100%"},
      md: {width: "200px", display: "flex"},

    }
  },
};
