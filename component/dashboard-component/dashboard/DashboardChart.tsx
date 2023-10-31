import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

const DashboardChart = () => {
  const data = [
    {
      name: "23 Jan",
      uv: 1500,
    },
    {
      name: "23 Jan",
      uv: 1600,
    },
    {
      name: "23 Jan",
      uv: 2400,
    },
    {
      name: "23 Jan",
      uv: 2780,
    },
    {
      name: "23 Jan",
      uv: 2000,
    },
    {
      name: "23 Jan",
      uv: 3490,
    },
    {
      name: "23 Jan",
      uv: 1890,
    },
  ];

  return (
    <AreaChart
      width={530}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv" // Use the "uv" data for this line
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
};

export default DashboardChart;
