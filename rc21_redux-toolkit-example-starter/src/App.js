import { Provider } from "react-redux";
import store from "./app/store";
import authSlice, { clearUser, setUser } from "./features/authSlice";
import AppRouter from "./router/AppRouter";


function App() {
  // const authSlicee = authSlice;
  // console.log(authSlicee)

  // Önemli: Burada console a bakarsak;  otomatik olarak type olusturuldugunu görürüz.
  // const setUserr = setUser("payload");
  // console.log(setUserr);

  // const clearUserr = clearUser();
  // console.log(clearUserr);

  return (
    // önemli Not: store u burada bir degiskene atamak zorunda degiliz. sadece import edip kullanabiliriz.
    <div>
      <Provider store = {store} >
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
