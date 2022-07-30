
//////////  Önemli:

// Burada isimler slice ile bitiyor. Cünkü biz burada toolkit e ait bir createSlice methodu kullaniyoruz. Bu method; bizim normal redux da manuel olusturdugumuz type action reducer gibi ayri ayri dosyalari tek bir yerden yapiyor. ve toolkit in bize sagladigi en önemli faydalardan biri kod kalabaligini ve dosya sayisini azaltmasidir. 
// Bunlari yapabilmek icin toolkit baska kütüphanelerden de yararlaniyor. 

import {createSlice} from "@reduxjs/toolkit";
// bu method klasik redux da bulunmaz

//? createSlice, Redux state lojiğini kisa yoldan tanimlamak icin kullanilan bir metotdur.
//? slice : ismi, state'lerin baslangic degerleri ve reducer'lari key-value yapisi seklinde tanimlar.
//? reducer, state'i degistiren fonksiyonlarin yaninda otomatik olarak action type'larin tanimlanmasini da saglar.

// const initialState = {
//     user : "",
// };

    /// createSlice icine object alir ve bu object icindeki hersey key value seklinde:
// const authSlice = createSlice({
//     name : "auth",
//     initialState,  // karsiliginda iki kez yazmaya gerek yok isimler ayni
//     reducers : {   // birden cok olabilecegi icin isim cogul
//         setUser : (state, action) => {
//             state.user = action.payload;
//         },
//         clearUser : (state) => {
//             state.user = ""
//         }
//     }
// });

// Not: reducer lar icinde reducer isimleri key.
// state leri degistirecek func lar ise value seklinde yazilir.

/// toolkit slice da reducer icine state ve action alir. burada type yazmayiz. 
// cünkü type toolkit tarafindan otomatik olusturulur.

// clear da payload a ihtiyac yok. 
