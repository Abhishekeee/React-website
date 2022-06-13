import React from "react";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="col-md-4 col-10">
      <div className="card">
        <img src={props.imgsrc} className="card-img-top" alt="Courses"/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">To become {props.title} your Can Explore our Course.</p>
          <NavLink to="/" className="btn btn-primary">
            Explore
          </NavLink>
        </div>
      </div>
    </div>
  );
}
