import { v4 as uuid } from "uuid";
import { EXPENSES_TYPES } from "../types";

const initialState = {
  expenses: [
    {
      expenseDesc: "Foodstuff",
      expenseAmount: 200000,
      _id: uuid(),
    },

    {
      expenseDesc: "Fuel",
      expenseAmount: 15000,
      _id: uuid(),
    },

    {
      expenseDesc: "Transport fee",
      expenseAmount: 20000,
      _id: uuid(),
    },
  ],
};

export const expenseReducers = (state = initialState, action) => {
  switch (action.type) {
    case EXPENSES_TYPES.EXPENSES_LISTS:
      return {
        ...state,
        expenses: state.expenses,
      };
    case EXPENSES_TYPES.EXPENSES_CREATE: 
            return {
              ...state,
              expenses: [ action.payload, ...state.expenses]
            }
    case EXPENSES_TYPES.EXPENSES_DELETE:
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense._id !== action.payload)
      }
    default:
      return state;
  }
};
export default expenseReducers;