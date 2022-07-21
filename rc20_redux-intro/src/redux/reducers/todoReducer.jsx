import {
  ADD_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../types/todoTypes";

const initialState = {
  todoList: [
    { id: new Date().getTime(), text: "Work on Redux", completed: true },
  ],
};

///  action i acti type ve payload.  bunu snippet yapti
// redux in ana state i bir object tir.

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed : false },
        ], // burada todoList key, sag taraf key
      }; /// en dista bir state objesi var.
    case DELETE_TODO:
      return { ...state, ...payload };
    case TOGGLE_TODO:
      return { ...state, ...payload };
    case CLEAR_TODO:
      return initialState;
    default:
      return state;
  }
};

export default todoReducer;
