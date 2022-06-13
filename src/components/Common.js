import React from "react";
import { NavLink } from "react-router-dom";

export default function Common(props) {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row height justify-content-evenly align-items-center text-md-start text-center">
          <div className="col-md-4 order-lg-1 order-2">
            <h1 className="fw-bold">
              {props.heading} <span className="d-block text-info my-3">{props.company}</span>
            </h1>
            <p className="fs-5">{props.line}</p>
            <NavLink className="btn getStarted fw-bold border border-info" to={`/${props.navLink}`}>
              {props.button}
            </NavLink>
          </div>
          <div className="col-md-4 order-lg-2 order-1">
            <img src={props.img} className="img-fluid home-img" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

Common.defaultProps={
    company:'N-10',
    line:'We are team of talanted developer making websites'
}