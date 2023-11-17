import React, { useEffect, useState } from "react";
 import { useParams } from "react-router-dom";
 import {IMG_CDN_URL, RESTURANT_MENU_URL} from "./config";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";





const ResturantMenu=()=>{ 

    const {resID}= useParams(); 
    const [resturant , setResturant]=useState()
    const [menulist, setMenuList]=useState([]);
    // const [name,setName]=useState();

    const dispatch=useDispatch(store=>store.cart);
    
    useEffect(()=>{  
        getMenuCardOfResturant();

    },[])

    async function getMenuCardOfResturant(){
        console.log("async function ")
        const data=await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+resID);
        const json=await data.json();
        setResturant(json?.data?.cards[0]?.card?.card?.info);
        // setMenuList(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card.info.name)
        setMenuList(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        // console.log(menulist[0].card.info.name);
 
    
      }
      

    //   click on btn dispaches an action and pass payload 
     const addFoodItem=(item)=>{
         dispatch(addItem(item));
     }

       // early return

    return !resturant?( <Shimmer/>):
        (
            <div className="menu">

                <div>
                     <h1> resturanat Id :{resID}</h1>
                     <h2>{resturant.name}</h2>
                     <img src={IMG_CDN_URL +  resturant.cloudinaryImageId} alt="" />
                     {/* <h2>{menulist}</h2> */}
                     <h3>{resturant.city}</h3>
                     {/* <h3>cusines + {Arrays.join(resturant.cuisines)}</h3> */}

                </div>

                {/* dispatches and action */}

 



                <div>
                        <h2>MENU</h2>
                        <ul >
                         {
                            menulist.map((e)=>{
                               let item=e.card.info.name;
                               return(
                                  <li key={e.id}>{item} <button className="addbtn" onClick={()=>addFoodItem(item)} >add</button></li>
                               )
                            })
                        }
                        </ul>
                           
                </div>
            </div>
        )
}

export default ResturantMenu;