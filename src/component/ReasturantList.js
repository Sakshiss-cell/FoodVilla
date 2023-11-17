//{fiilterRestrarunts.map((res)=>{console.log(res[0].data.name)})}

import React from "react";

import { IMG_CDN_URL } from "./config";

const ResturnatList = (...res) => {
  // console.log(res[0]);
  return (
    <div className="card">
      <img src={IMG_CDN_URL + res[0].cloudinaryImageId} alt="" />
      <h3>{res[0].name}</h3>
      <p>{res[0]?.cuisines.slice(0, 2).join(", ")}</p>
      <p className="ratings">{res[0].avgRating} stars </p>
    </div>
  );
};

export default ResturnatList;
