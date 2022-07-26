

/// action lar; object return eden bir func dan ibarettir.
// projemiz büyüdükce;  ui tarafinda dispatch kullanirken logic kismi birden cok satirdan olusabilir. Bu nedenle her seferinde bu kodlari yazmamak icin action dosyasinda kodlarimizi func haline getiriyoruz ve dispatch icinde sadece bir func cagiriyoruz. 

import { DECREMENT, INCREMENT, RESET } from "../types/counterTypes"

export const increment = () => {
    return { type : INCREMENT }
};

    /// süslü acmadigimiz zaman return e ihtiyac yok:

export const decrement = () => ({ type : DECREMENT })

export const reset = () => {
    return { type : RESET }
};