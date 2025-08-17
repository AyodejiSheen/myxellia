"use client";
import "@mantine/charts/styles.css";
import React from "react";
import { BarChart } from "@mantine/charts";

const SalesCharts = () => {
  const data = [
    { month: "Jan", Smartphones: 1200, Laptops: 900, Tablets: 200 },
    { month: "Feb", Smartphones: 1900, Laptops: 1200, Tablets: 400 },
    { month: "Mar", Smartphones: 400, Laptops: 1000, Tablets: 200 },
    { month: "Apr", Smartphones: 1000, Laptops: 200, Tablets: 800 },
    { month: "May", Smartphones: 800, Laptops: 1400, Tablets: 1200 },
    { month: "Jun", Smartphones: 750, Laptops: 600, Tablets: 1000 },
    { month: "Jul", Smartphones: 1200, Laptops: 900, Tablets: 200 },
    { month: "Aug", Smartphones: 1900, Laptops: 1200, Tablets: 400 },
    { month: "Sep", Smartphones: 400, Laptops: 1000, Tablets: 200 },
    { month: "Oct", Smartphones: 1000, Laptops: 200, Tablets: 800 },
  ];

  return (
    <BarChart
      h={"20dvh"}
      data={data}
      maxBarWidth={5}
      dataKey="month"
      series={[
        { name: "Smartphones", color: "violet.6" },
        { name: "Laptops", color: "blue.6" },
        { name: "Tablets", color: "teal.6" },
      ]}
      tickLine="y"
      barChartProps={{
        barGap: 2,
        barCategoryGap: 28,
      }}
    />
  );
};

export default SalesCharts;
