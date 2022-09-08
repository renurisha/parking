import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const Bookingslot = () => {
  const { name, id } = useParams();
  console.log("details", name, id);
  const [totalparking, setTotalparking] = useState();
  const [totalOutlet, setTotalOutlet] = useState([]);
  const [totalParkingslots,setTotalParkingslots]=useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await axios.get(
      `http://localhost:3001/parkinglocation?location=${name}`
    );
    console.log("location", data.data[0].outlets);

    setTotalOutlet(data.data[0].outlets);
    totalSlotsInoutlet(data.data[0].outlets);
  };

  const totalSlotsInoutlet = (data) => {
    data.filter((e) => {
      if (e.id == id) {
        console.log("slot", e);
        setTotalparking(e.totalparking);
      }
    });

    totalSlotsFun();
  };
  const totalSlotsFun=()=>{
    let i=1;
    while(i<=totalparking){
        let obj={
            id:i,
            slotNum:`slot${i}`
        }
        totalParkingslots.push(obj);
        i++;
    }

  }
  

  return (
    <div>
      <h1>Book Your Parking Slot</h1>
      
    </div>
  );
};
