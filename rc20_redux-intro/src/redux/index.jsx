

// Note: counter örneginin redux ile cözümünü iki farkli sekilde yapacagiz. Birincisinde store u app.js de olusturacagiz. Ikincisinde ise her biri icin ayri klasör yapisi kuracagiz.


// bu dosyadaki reducer i ilk yöntemi olustururken yazmistik. ama index.js cok karisik olmasin diye buradaki reducer i reducers klasörüne aliyoruz. 

/// index.js i reducer larin birlesme noktasi ve store un olusturuldugu yer olarak kullaniyoruz.

// her zaman tek bir store vardir. birden cok reducer olabilir. 




// import { DECREMENT, INCREMENT, RESET } from "./types/counterTypes";

// // counter icin tek bir state e ihtiyacimiz var:
// const initialState = {
//     counter : 0
// };

//     // reducer bir func dir:

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {counter : state.counter + 1}
//         case DECREMENT:
//             return {counter : state.counter - 1}
//         case RESET:
//             // return initialState;
//             return {counter : 0}
//             // reducer muhakkak birsey return eder. Bu nedenle default da bos birakilmaz
//         default:
//             return state; 
//     }
// };

// export default reducer;

// Not: "INCREMENT"  büyük olma nedeni:
// degismeyecek sabit olan string ler best practice olarak büyük yazilir ama bu zorunluluk degil.
// Not: eger counter in negativ olmasini istemiyorsak;  bu durumda burada yada ui tarafinda bir if statement yazabiliriz. 



///////////////////////////////////////////////////////////////////////////////



import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

        /// store tek oldugundan birden fazla reducer varsa birlestirilir

const rootReducer = combineReducers({
    counterReducer : counterReducer,
    todoReducer : todoReducer,
});
/// Önemli:  burada counterReduver ve todoReducer isimleri önemli. Cünkü ui tarafinda cagirma esnasinda bu isimleri kullanacagiz. 

    /// burada bizim store umuzu return eden bir func yazacagiz:

export const combinedStore = () => {
    const store = createStore(rootReducer);
    return store;
};