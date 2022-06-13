import React, { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({
    fname: "",
    phone: "",
    email: "",
    message: "",
  });
  const inputEvent = (e) => {
    const { name, value } = e.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name : ${data.fname}\nPhone no : ${data.phone}\nEmail Id : ${data.email}\nMessage : ${data.message}`
    );
  };
  return (
    <>
      <div className="container height">
        <div className="row text-center my-5">
          <h1>Contact Us</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5 col-10">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="fname"
                  value={data.fname}
                  onChange={inputEvent}
                  id="name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="number" class="form-label">
                  Phone No
                </label>
                <input
                  type="number"
                  class="form-control"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  id="number"
                  min="10"
                  max="10"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email Id
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  id="email"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">
                  Message box
                </label>
                <textarea
                  class="form-control"
                  name="message"
                  value={data.message}
                  onChange={inputEvent}
                  id="message"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
