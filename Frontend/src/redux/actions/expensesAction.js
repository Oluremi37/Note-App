import { EXPENSES_TYPES } from "../types";


export const listExpenses = () => async (dispatch) => {
  try {
    dispatch({
      type: "LIST_EXPENSES",
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const createExpense = (newExpenses) => async dispatch => {
    try {
        dispatch({
            type: EXPENSES_TYPES.EXPENSES_CREATE,
            payload: newExpenses
      })  
    } catch (err) {
        console.log(err.message);
        
    }
}


export const deleteExpense = (id) => async dispatch => {
   try {
       dispatch({
           type: EXPENSES_TYPES.EXPENSES_DELETE,
           payload: id
    })
   } catch (err) {
    console.log(err.message);
    
   } 
}