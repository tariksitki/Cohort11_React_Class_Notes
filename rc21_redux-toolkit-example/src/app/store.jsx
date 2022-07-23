
// createStore func inin islerini basitlestirir

import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import newsReducer from "../features/newsSlice";

const store = configureStore({
    reducer : {
        auth : authReducer,
        news : newsReducer,
    },
    // devTools : false,
    devTools : process.env.NODE_ENV !== "production",


});
// buradaki iki reducer; otomatik olarak configureStore tarafindan combine edilecek 
// klasik redux da hem create edip hem de combine etmemiz gerekiyordu. burada ikisi ayni yerde

// devTool u false yapmanin iki nedeni:
// birincisi baska tool kullanmak
// ikincisi user lar bizim state lerimizi görmesin

// NODE_ENV  icinde phase leri barindirir


export default store;
