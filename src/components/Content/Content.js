import React from "react";
import "./ContentStyles.css";
import { ArrowDownward } from "@material-ui/icons";
export default function Content() {
  return (
    <div className="content">
      <div className="contentItem">
        <span className="contentTitle">Revenue </span>
        <div className="contentWidgetContainer">
          <span className="contentWidgetAmount">$2500</span>
          <span className="contentWidgetRate">
            -11% <ArrowDownward />
          </span>
        </div>
        <span className="contentWidgetSubtitle">Last Months Sales</span>
      </div>



      <div className="contentItem">
        <span className="contentTitle">Sales </span>
        <div className="contentWidgetContainer">
          <span className="contentWidgetAmount">$2500</span>
          <span className="contentWidgetRate">
            -11% <ArrowDownward />
          </span>
        </div>
        <span className="contentWidgetSubtitle">Last Months Sales</span>
      </div>



      <div className="contentItem">
        <span className="contentTitle">Cost of Goods Sold </span>
        <div className="contentWidgetContainer">
          <span className="contentWidgetAmount">$2500</span>
          <span className="contentWidgetRate">
            -11% <ArrowDownward />
          </span>
        </div>
        <span className="contentWidgetSubtitle">Last Months Sales</span>
      </div>
    </div>
  );
}
