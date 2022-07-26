import { ADDTODO, CLEARTODO, DELETETODO, TOGGLETODO } from "../types/todoTypes";

  // todo icin bir state yazacagiz. Bu nedenle bu state array icinde object formatinda olmali. Yani json formati. Cünkü todo lara ait id, date, completed, text gibi verileri tutmamiz gerekecek. 

const initialState = {
  todoList : [],
};

  //// Önemli: counter örneginde reduver i kendimiz yazmistik bu nedenle action.type kullanmistik. Burada ise action otomatik olarak destructure edilir ve switch icine direkt olarak type yazilir. 

  /// action icerisine type ve payload alir

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ADDTODO:
    return {
      todoList : [ ...state.todoList, { id: new Date().getTime(), text : payload, completed : false }]
    }

  case TOGGLETODO:
    return { ...state, ...payload }

  case DELETETODO:
    return { ...state, ...payload }

  case CLEARTODO:
    return initialState;

  default:
    return state;
  }
};

export default todoReducer;
