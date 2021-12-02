import React from "react";
import "./ChartStyles.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Charts({title, data, dataKey, grid}) {
 
  return (
    <div className="chart">
      <h3 className="chartWidgetTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
            <XAxis dataKey="month" stroke="#334d3a"/>
            <Line type="monotone" dataKey={dataKey} stroke="#0e1836"/>
            <YAxis dataKey={dataKey}/>
            <Tooltip />
            {grid && <CartesianGrid stroke="#e6e6e6" strokeDasharray="5 5"/>}
            <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
