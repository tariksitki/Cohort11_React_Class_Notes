import { ADDTODO, CLEARTODO, DATAFROMLOCALSTORAGE, DELETETODO, TOGGLETODO } from "../types/todoTypes";


//// action lar her zaman icinde type ve payload olan bir object return eder:
/// action icerisine type ve payload alir

export const addTodo = (payload) => {
    return { type: ADDTODO, payload };
};

export const toggleTodo = (payload) => ({ type: TOGGLETODO, payload });

export const deleteTodo = (payload) => ({ type: DELETETODO, payload });

    /// delete de silinecek todo yu tespit edebilmek icin id gerekli ama clear hepsini sildigi icin gerekli degil. 

export const clearTodo = () => ({ type: CLEARTODO });

export const dataFromLocalStorage = () => ({ type: DATAFROMLOCALSTORAGE });
