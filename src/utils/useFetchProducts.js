import React, { useEffect, useState } from "react";
import { cheackOnlineStatus } from "./useOnlineStatus";

// import{restaurantList} from "../config";

export const useFetchProducts = () => {
  const isOn = cheackOnlineStatus();
  //  console.log(isOn)

  const [isOnline, setIsOnline] = useState(isOn);

  const [allresturnat, setAllResturnat] = useState([]);
  const [fiilterRestrarunts, setFiilterRestrarunts] = useState([]);


  // https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING

  if (isOnline) {
    const getResturant = async () => {
      const data = await fetch(
        "https://corsproxy.io/?https://swiggy-clone-wjqx.onrender.com/api/v1/restaurant?location=patna&page=0"
      );
      const json = await data.json();
      console.log(json.data)
      setAllResturnat(json.data);
      setFiilterRestrarunts(json.data);
   
    };
    useEffect(() => {
      getResturant();
    }, []);

console.log({allresturnat})    

    return {
      allresturnat,
      fiilterRestrarunts,
      setFiilterRestrarunts,
    };
  } else {
    return <h2>please connect to internet</h2>;
  }
};
