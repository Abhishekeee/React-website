import React from "react";
import Common from "./Common";
import rocket from "../images/rocket.jpg";

export default function Home() {
  const h = `Grow your business with`;
  const btn = `Get Started`;
  const link = `services`;
  return (
    <>
      <Common heading={h} button={btn} img={rocket} navLink={link} />
    </>
  );
}
