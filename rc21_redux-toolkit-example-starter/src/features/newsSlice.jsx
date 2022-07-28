
/// Api den gelen news bilgisini icine atabilmek icin bu slice i olusturacagiz:

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    news : "",
};

const newsSlice = createSlice({
    name : "news",
    initialState,
    reducers : {

    }
});

// export const {} = newsSlice;
export default newsSlice;