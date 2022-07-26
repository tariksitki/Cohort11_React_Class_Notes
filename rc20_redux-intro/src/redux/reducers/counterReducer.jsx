import { DECREMENT, INCREMENT, RESET } from "../types/counterTypes";

// counter icin tek bir state e ihtiyacimiz var:
const initialState = {
  counter: 0,
};

// reducer bir func dir:

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    case RESET:
      // return initialState;
      return { counter: 0 };
    // reducer muhakkak birsey return eder. Bu nedenle default da bos birakilmaz
    default:
      return state;
  }
};

export default counterReducer;
