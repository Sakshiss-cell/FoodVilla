// create context here

import { createContext } from "react";

  const UserContext=createContext({
    user:{
        name:"dummyname",
        email:"dummy@gmail.com"
    }
   
  })
  
  
  export default UserContext;