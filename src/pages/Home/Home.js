import React from "react";
import "./HomeStyles.css";
import Content from "../../components/Content/Content";
import Chart from "../../components/Chart/Chart";
import SmallWidget from "../../components/SmallWidget/SmallWidget";
import LargeWidget from "../../components/LargeWidget/LargeWidget";
import { salesData } from "../../dummyData";

export default function Home() {
  return (
    <div className="home">
      <Content />
      <Chart
        data={salesData}
        title="Sales Analytics"
        grid
        dataKey="Products Sold Amount"
      />
      <div className="homeWidgets">
        <SmallWidget />
        <LargeWidget />
      </div>
    </div>
  );
}
