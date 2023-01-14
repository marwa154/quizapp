export default(state,action)=>{
    switch(action.type){
       case 'GET_CATEGORY':
       return{
          ...state,
          categories:state.categories.find(c => c.id === action.payload)
       }
    //    case 'ADD_TRANSACTION':
    //        return{
    //            ...state,
    //            transactions:[action.payload,...state.transactions]  
    //        }
       default:
           return state;
    }
   }