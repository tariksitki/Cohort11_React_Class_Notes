
// createSlice methodu ile hersey bir yere toplanir hepsini ayri ayri yapmaya gerek yok 

import { createSlice } from "@reduxjs/toolkit";

// redux toolkit in en önemli özelligi dosya sayisini azaltir 

const initialState = {
    user : "",
};

const authSlice = createSlice({
    name : "auth",
    // initialState : initialState,
    initialState,
    reducers : {
        setUser : (state, action) => {
            state.user = action.payload
        },
        clearUser : (state) => {
            state.user = ""
        }
    }
});

export const {setUser, clearUser} = authSlice.actions;
export default authSlice.reducer;

// createSlice type i otomatik olarak olusturur. 


//? createSlice, Redux state lojiğini kisa yoldan tanimlamak icin kullanilan bir metotdur.
//? slice ismi, state'lerin baslangic degerleri ve reducer'lar key-value yapisi seklinde tanimlar.
//? reducer, state'i degistiren fonksiyonlarin yaninda otomatik olarak action type'larin tanimlanmasini da saglar.