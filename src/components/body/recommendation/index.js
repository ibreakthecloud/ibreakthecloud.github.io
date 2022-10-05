import React from "react";
import "./recommendation.css";
import Separator from "../../common/separator";
import {WorkData} from "../../data/work";
import WorkCard from "./recommendation-card";
function Recommendation() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Recommendation</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );  
}

export default Recommendation;