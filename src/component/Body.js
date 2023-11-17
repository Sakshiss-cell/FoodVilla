import React, { useEffect, useState } from "react";
import ResturnatList from "./ReasturantList";
import {useFetchProducts} from "../utils/useFetchProducts";
import {useFilterResturant} from "../utils/useFilterResturant"
import { cheackOnlineStatus } from "../utils/useOnlineStatus";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


  
function handleChange(e){
  console.log(e.target.value);
  setSearchText=e.target.value;
}


console.log(cheackOnlineStatus())

const Body=()=>{
   
   const [serachText,setSearchText]=useState("");
   const {allresturnat,fiilterRestrarunts,setFiilterRestrarunts} = useFetchProducts();

   const isOn= cheackOnlineStatus();
  //  console.log(isOn)
   
   const [isOnline, setIsOnline]=useState(isOn);

   if(!isOnline){
    return <h1>please connect to internet we are waiting....</h1>
   }
   
  //early returns
  if(!allresturnat){
    return <Shimmer/>
  }

   return (
   <> 
   <div className="search-container">
         <input type="text" placeholder="Search for restutant" value={serachText}  onChange={e=>setSearchText(e.target.value)}/>
        
         <button 
         onClick={()=>{
          // hook usefilter
           let data= useFilterResturant(allresturnat,serachText);
           console.log(data);
           setFiilterRestrarunts(data);
         }}>
          
          Search</button>

   </div>



    <div className="card-container">
    {fiilterRestrarunts.map((res)=>{

     return(
     <Link to={"/resturant/"+res.info.id}> <ResturnatList  {...res.info}/></Link>
     )
    })}

    </div>
    
   </>
   )
}
export default Body;