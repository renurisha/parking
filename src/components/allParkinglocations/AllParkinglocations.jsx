import React from "react";
import { Link } from "react-router-dom";

import "./allparking.css";
export const AllParkinglocations = () => {
  return (
    <div className="">
      <h1>ALL PARKING LOCATIONS</h1>
      <hr />
      <div className="allParkContainer">
        {" "}
        <div>
          {" "}
          <Link to={"/outlet/Street Mall Ranchi"}>
            <div className="locationImg">
              <img src="https://tse1.mm.bing.net/th?id=OIP.Rl58WdXDpkcyYlhZwmxqYwHaEK&pid=Api&rs=1&c=1&qlt=95&w=218&h=122" />
              <span>Street Mall Ranchi</span>
            </div>
          </Link>
        </div>
        <div>
          <Link to={"/outlet/Delhi NCR"}>
            <div className="locationImg">
              <img src="https://tse1.mm.bing.net/th?id=OIP.Rl58WdXDpkcyYlhZwmxqYwHaEK&pid=Api&rs=1&c=1&qlt=95&w=218&h=122" />
              <span>Delhi NCR</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
