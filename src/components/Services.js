import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

export default function Services() {
  return (
    <>
      <div className="container my-5">
        <div className="row text-center my-5">
          <h1> Our Services</h1>
        </div>
        <div className="row justify-content-md-start justify-content-center gy-4">
          {Sdata.map((val, ind) => {
            return <Card imgsrc={val.img} title={val.title} key={ind} />;
          })}
        </div>
      </div>
    </>
  );
}
