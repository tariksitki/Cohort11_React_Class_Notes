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
    return (
      {
      todoList : [ ...state.todoList, { ...payload }]
    }
    )
    

  case TOGGLETODO:
    return { todoList : state.todoList.map((item) => {
      return (
        item.id === payload ? {...item, completed : !item.completed} : {...item}
      )
    }) };
    // map burada liste return edecegi icin liste yapmadik. 

  case DELETETODO:
    return { todoList : state.todoList.filter((item) => item.id !== payload )}
    // filter burada list return edecegi icin tekrar liste yapmadik. 

  case CLEARTODO:
    return initialState;

  default:
    return state;
  }
};

export default todoReducer;
