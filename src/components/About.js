import React from "react";
import Common from "./Common";
import AboutImg from '../images/office.jpg'

export default function About() {
  const h = `Welcome to About Page`;
  const btn = `Contact Now`;
  const link = `contact`;
  return (
    <>
      <Common heading={h} button={btn} img={AboutImg} navLink={link} />
    </>
  );
}
