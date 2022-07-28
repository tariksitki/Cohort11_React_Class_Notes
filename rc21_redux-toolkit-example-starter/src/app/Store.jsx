import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import newsReducer from "../features/newsSlice";

/// Önemli: slice lari export ederken kendi isimleri ile default olarak export etmistik. ama burada import ederken kendi isimleri ile degil isimlerini degistirerek import ettik.

// Önemli: normal redux da store olustururken; önce create yapiyoruz sonra combine ediyoruz. Burada ise configure komutu ikisini beraber yapiyor.

const store = configureStore({
  reducer: {
    //// burada -s takisi yok
    news: newsReducer,
    auth: authReducer
  },
  // devTools : false
  // devTools : process.env.NODE_ENV !== "production"

  // bu kod production haricinde her ortamda kullanacagim demek. kodumuzun hangi asamada oldugunu package.json dosyasi icinde scripts kisminda görebiliriz.
  // default degeri true dur.
  // aslinda process.env  Node.js ortamlarinda env degiskenlrini okumamiza yarayan birsey ama burada production ortaminda kullanicilara state lerimizi göstermemek icin kullaniyoruz.
});

export default store;

// Önemli: Buradaki auth ve news isimleri consume ederken kullanacagimiz isimler. 