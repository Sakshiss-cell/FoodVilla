import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

//configureStore conatins slices

// store is created using ====>configureStore

/**
 * store is diffrent and our application is diffrent
 * connect app and store
 * you need to provide store to ur application
 */

//cartslice by defult export reducer functions

const store=configureStore({
     reducer:{
        cart:cartSlice,
     }
});

export  default store;