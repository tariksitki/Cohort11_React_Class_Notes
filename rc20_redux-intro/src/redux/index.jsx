
// projenin babasi index.js idi
// redux klasörü icinde de index.js baba rolünde



// index.js verme avantaji; react tool lari otomatik olarak bulur.
// sadece importu kisaltmis olur. 


    /// reducer i ilk etap da burada olusturmustuk. onu ayri bir reducer icine aldik
    // burada hepsini toplayacagiz. 

// import { DECREMENT, INCREMENT, RESET } from "./types/counterTypes";

// // state catisi altinda sinirsiz sayida state kullanabiliriz.

// export const initialState = {
//     counter : 0,
// };

//     // bu bir durum makinesi aslinda:
// export const reducer = (state=initialState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {counter : state.counter + 1}
//         case DECREMENT:
//             return {counter : state.counter - 1}
//         case RESET:
//             return {counter : 0}  // ui tarafinda 0 a kur da denilebilir. 
//         default:
//             return state;
//     }
// };




// INCREMENT büyük yazmak zorunluluk degil. constant stringler yani sabit stringler büyük harfle yazilir. icerigi degismeyecek olan stringler büyük harfle yazilir. 

// reducer her zaman bir state return etmek zorundadir. illa ki bir return a ihtiyaci var. o nedenle default icin yine kendi state imizin kendi halini return etmemiz gerekir.



/// birden cok reducer olsa da tek bir state vardir. 


/////////////////////////////////////////////////////

import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
    counterReducer : counterReducer,
    todoReducer : todoReducer,
});

export const combinedReducer = () => {
    const store = createStore(rootReducer)
    return store;
};
 
