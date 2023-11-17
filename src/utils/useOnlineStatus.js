
import React from "react";

export function cheackOnlineStatus(){
    let isOnline=navigator.onLine
   
    return isOnline?true:false;
  }