
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Footer from "./src/component/Footer";
import Body from "./src/component/Body";
import {  Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./src/component/Contact";
import About from "./src/component/About";
import ResturantMenu from "./src/component/ResturantMenu";
import Instamart from "./src/component/Instamart";
import UserContext from "./src/utils/UserContext";
//connection btn redux store and appp
import { Provider } from "react-redux";
import store from "./src/utils/store";
import Cart from "./src/utils/Cart";





const AppRouting=()=>{
 
    // want this info evrywhere
const [user,setUser]=useState(
    {
        name:"sakshi",
        email:"sakshigawande40@gmail.com"
    }
)

    return(
        // provide store to complete app using provider
        <Provider store={store}>
            {/* update context using provider */}
            <UserContext.Provider value={{user:user}}>
                
                <Header/>
                {/* dependes on path render here component */}
                <Outlet/>  
                <Footer/>

            </UserContext.Provider>
        </ Provider>
        
    )
}


const routing=createBrowserRouter(
    [
        {
            path:"/",
            element:<AppRouting/>,
            children:[
                {
                    path:"/",
                    element:<Body/>,
                    errorElement:<Error/>
                },
                {
                    path:"/about",
                    element:<About/>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                },
                {
                    path:"/instamart",
                    element:<Instamart/>
                },
                { 
                    path:"/cart",
                    element:<Cart/>

                },
                { 
                    //dynamic routing
                    path:"/resturant/:resID",
                    element:<ResturantMenu/>
                }


            ]
        }
    ]
)




const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routing}/>);