
// birden cok reducer olabilir bu nedenle reducer in index.js icinde olmasi mantiksiz

import { DECREMENT, INCREMENT, RESET } from "../types/counterTypes";

// state catisi altinda sinirsiz sayida state kullanabiliriz.

export const initialState = {
  counter: 0,
};

// bu bir durum makinesi aslinda:
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    case RESET:
      return { counter: 0 }; // ui tarafinda 0 a kur da denilebilir.
    default:
      return state;
  }
};