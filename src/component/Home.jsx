import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <>
    <div className="Home">
      <div className="card bg-light text-dark shadow-sm border-0">
        <img src="./assets/Main.jpg" className="card-img" alt="Background" height="570px" />
        <div className="card-img-overlay d-flex flex-column justify-content-around">
        <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE LATEST TRENDS.
          </p>
          </div>
        </div>
      </div>
      </div>
      <Products />
    </>
  );
}
