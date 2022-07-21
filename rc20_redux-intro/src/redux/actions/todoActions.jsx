
/// rxaction snippet

import { ADD_TODO, CLEAR_TODO, DELETE_TODO, TOGGLE_TODO } from "../types/todoTypes";

// isin redux tarafinda func larin parametrelerine payload denilir. 
/// action lar object return eder. 
//  reducer da action  { type, payload }  seklinde acilir. 

export const addTodo = (payload) => {
    return {type : ADD_TODO, payload : payload}
};

export const deleteTodo = (payload) => {
    return {type : DELETE_TODO, payload : payload}
};

export const toggleTodo = (payload) => {
    return {type : TOGGLE_TODO, payload : payload}
};

    /// delete de id gerekli clear da hepsini sil oldugu icin gerek yok. 

export const clearTodo = () => {
    return {type : CLEAR_TODO }
};

