import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./outlet.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Outlets = () => {
  const { name } = useParams();
  const [totalOutlet, setTotalOutlet] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await axios.get(
      `http://localhost:3001/parkinglocation?location=${name}`
    );
    console.log("location", data.data[0].outlets);

    setTotalOutlet(data.data[0].outlets);
  };

  return (
    <div className="outlets">
        <h1>OUTLETS ON <b style={{color:"red"}}>{name}</b> PARKING</h1>
      <table>
        <tr>
          <th>Outlet Name</th>
          <th>Total Parking slots</th>
          <th>Vacant</th>
          <th>Action</th>
        </tr>
        {totalOutlet.map((e) => {
          return (
            <tr>
              <td>{e.name}</td>
              <td>{e.totalParking}</td>
              <td>{e.vacant}</td>
              <td>
                <Link to={`/booking/${name}/${e.id}`}>Book slot</Link>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
