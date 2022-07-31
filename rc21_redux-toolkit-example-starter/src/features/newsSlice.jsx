
/// Api den gelen news bilgisini icine atabilmek icin bu slice i olusturacagiz:

//? State'lerin API gibi async kaynaklardan gelen verilere gore guncellenmesi gerekebilir.
//? Ancak boyle bir durumda async islem tamamlandiktan sonra state guncellenmelidir.
//? Gonderilen api istegi ile dogrudan state guncellememelidir.
//? Islemin tamamlanmasi ile gelen veriye gore state'in guncellenemsini saglamak
//? adina bir arabirim kullanilmaktadir.
//? Bu arabirim middleware denilir.Redux-Toolkit, default olarak Thunk kullanmaktadir.
//! Thunk'ın amaci reducer a islenmis sonuclari gondermeden once gecikmeli asenkron islemlerin yurutulmesini saglamaktir.

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    newsList : [],  // apiden gelen veriler icine atilacagindan bos array yaptik.
    loading : true,
};


    /// thunk icin func:
// createAsyncThunk  func iki tane parametre alir. 
// Birinci parametre bizim actionlarimiza gönderilecek olan type larimizin hangi isim ile gönderilecegini belirten bir string dir. 
// ikinci parametre ise; payloadCreator func idir. yani bir callback func dir. bu func bizim state imizi degistirmek icin reducer a gönderecegimiz payload i üretir. Ve bu func icine api den istek yapma gibi tüm islemlerimizi yazariz.

export const getNews = createAsyncThunk(
    "news/getNews",
    async () => {
        const API_KEY = "12c34b6d80234673987cc7094eaa6dbf";
        const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
        try {
            const {data} = await axios.get(url);
            return data.articles;

        } catch (error) {
            console.log(error);
        }
    }
    )

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewsList: (state) => {
      state.newsList = [];
    },
  },
  // extraReducers in keyleri bir array value lari ise birer func dir.
  extraReducers: {
    [getNews.pending]: (state, action) => {
      state.loading = true;
    },
    [getNews.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.newsList = payload;
    },
    [getNews.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

/// extraReducers:
// //! baska slice'lardaki tanimlanan action'lara cevap vermek
//! bilhassa createAsyncThunk tarafindan olusturulan action'lara
//! cevap vermek icin kullanilir. Peki ne zaman kullaniriz? CretaeAsyncThunk func kullandigimiz zaman kullaniriz. 
/// Burada kullanma amacimiz: getNews isimli func bize bir promise return eder. promise larin da 3 tane life cycle i olur. pending, fullfilled ve rejected. iste simdi bu 3 asamada loading in ne olacagini burada belirleyecegiz. 

// Özet:  redux kullandigimizda async yapimiz varsa middleware kullanilir. Middleware kullandigimizda da promise yapisinin lifecycle larini düzenlemek icin extrareducer kullaniriz. 



    /// export lara dikkat:  getNews yukarida export ettik digerlerini burada


export const {clearNewsList} = newsSlice.actions;
export default newsSlice.reducer;



/////////  user tarafindan dispatch yapildiktan sonra islem sirasi:

// user dispatch icerisinde, hangi state i degistgirmek istiyorsa o state e ait action i girer. biz dispatch icinde getNews calistiriyoruz. Bu nedenle bizim bu func imiz calisir ve api den veri cekme islemlerinin tamamini yapar ve data.articles ismi ile return eder. 
// Burada return edilen sey  [getNews.fulfilled]  de bulunan payload a karsilik gelir. ve biz de bu payload i state de bulunan newsList in icine atariz ui tarafinda map ederek gösteririz.

