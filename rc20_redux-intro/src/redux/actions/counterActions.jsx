
/// dispatch ler icinde elimizle manuel olarak INCREMENT yazmamak icin bu state leri degistiren func lar yazacagiz. 

import { DECREMENT, INCREMENT, RESET } from "../types/counterTypes";

export const increment = () => {
    return {type : INCREMENT }
};

    /// süslü acmadan func olusturma:
export const decrement = () => ({type : DECREMENT});

export const reset = () => ({ type: RESET });

