"use client";

import { Card, Title, DonutChart as Pie, Subtitle } from "@tremor/react";

const data = [
  {
    name: "Basic Tees",
    sales: 55,
  },
  {
    name: "Custom Short Pants",
    sales: 31,
  },
  {
    name: "Supper Hoddies",
    sales: 14,
  },
];

const valueFormatter = (number: number) =>
  `${new Intl.NumberFormat("us").format(number).toString()}%`;

export default function PieChart() {
  return (
    <Card className="w-full">
      <div className="flex items-center justify-between">
        <Title>Top products</Title>
        <Subtitle>May - June 2021</Subtitle>
      </div>
      <div className="flex items-center justify-between mt-4 w-full">
        <Pie
          className="w-full"
          data={data}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={["green", "yellow", "rose"]}
        />

        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col text-xs">
            <Title>Basic Tees</Title>
            <Subtitle>55%</Subtitle>
          </div>
          <div className="flex flex-col text-xs">
            <Title>Custom Short Pants</Title>
            <Subtitle>31%</Subtitle>
          </div>
          <div className="flex flex-col text-xs">
            <Title>Supper Hoddies</Title>
            <Subtitle>14%</Subtitle>
          </div>
        </div>
      </div>
    </Card>
  );
}
