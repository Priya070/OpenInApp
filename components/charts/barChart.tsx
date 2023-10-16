"use client";

import { Card, Title, BarChart as Bar, Subtitle } from "@tremor/react";

const chartdata = [
    {
        name: "Week 1",
        "Guest": 500,
        "User": 400,
      },
      {
        name: "Week 2",
        "Guest": 350,
        "User": 450,
      },
      {
        name: "Week 3",
        "Guest": 200,
        "User": 300,
      },
      {
        name: "Week 4",
        "Guest": 400,
        "User": 325,
      },
];

const valueFormatter = (number: number) =>
  `${new Intl.NumberFormat("us").format(number).toString()}`;

export default function BarChart() {
  return (
    <Card className="p-6">
      <Title>Activities</Title>
      <Subtitle>
        May - June 2021
      </Subtitle>
      <Bar
        className=" h-[200px]"
        data={chartdata}
        index="name"
        categories={["Guest", "User"]}
        colors={["green", "rose"]}
        valueFormatter={valueFormatter}
        yAxisWidth={48}
      />
    </Card>
  );
}
