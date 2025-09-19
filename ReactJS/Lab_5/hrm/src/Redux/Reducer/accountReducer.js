import { ADD_ACCOUNT_ } from "../Contants/AccountActionType";

let intinalState = {
  listAccount: [],
};
// Khai báo reducer
export let accountReducer = (state = intinalState, action) => {
  //
  switch (action.type) {
    case ADD_ACCOUNT_:
      //
      let accountNew = action.account; // account2
      return {
        ...state,
        listAccount: [...state.listAccount, accountNew],
      };
    default:
      return {
        ...state,
      };
  }
};
