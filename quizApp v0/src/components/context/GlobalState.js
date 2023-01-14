import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
import { getCategories } from '../../data';
//initial state
const initialState={
    // transactions:[]
    questions:fetchQuestions(),
    categories:getCategories(),
    
    
}
async function fetchQuestions() {
    try {
      const response = await fetch('https://the-trivia-api.com/api/questions?limit=20&categories=science,history', {
        headers: {'Content-Type': 'application/json'},
      })
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

//create context
export const GlobalContext=createContext(initialState);
//Provider Component
export const GlobalProvider=({children})=>{
   const [state,dispatch]=useReducer(AppReducer,initialState);
   //Actions
   function getCategory(id) {
    dispatch({
      type:'GET_CATEGORY',
      payload:id
    })
  }
//    function deleteTransaction(id){
//        dispatch({
//          type:'DELETE_TRANSACTION',
//          payload:id
//        })
//    }
//    function addTransaction(transaction){
//     dispatch({
//         type:'ADD_TRANSACTION',
//         payload:transaction
//     })
//    }
   return(
    <GlobalContext.Provider 
    value={{categories:state.categories,getCategory}}>
        {children}
    </GlobalContext.Provider>
   )
}
