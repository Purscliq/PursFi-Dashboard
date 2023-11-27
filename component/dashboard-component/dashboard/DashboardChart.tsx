import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";

const DashboardChart = ({ data }: { data: Record<string, any>[] }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart
        width={530}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="date" />
        {/* <YAxis /> */}
        {/* <CartesianGrid strokeDasharray="3 0" /> */}
        <Tooltip />
        <Area
          type="monotone"
          dataKey="balance"
          stroke="#000"
          fillOpacity={1}
          fill="#84818A"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DashboardChart;
