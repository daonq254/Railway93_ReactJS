// import { createStore } from "redux";
import { actionCloseInpuForm, actionShowInpuForm } from "./Actions/FormAction";
import { actionCreateNewAccount } from "./Actions/AccountAction";
import { store } from "./Store/StoreRedux";
console.log("Redux Core");
// Khai báo ra các state cần quản lý
// let intinalState = {
//   showForm: false,
//   listAccount: [],
// };
// // Khai báo reducer
// let reducer = (state = intinalState, action) => {
//   //
//   switch (action.type) {
//     case SHOW_INPUT_FORM:
//       //
//       return {
//         ...state,
//         showForm: true,
//       };

//     case CLOSE_INPUT_FORM:
//       //
//       return {
//         ...state,
//         showForm: false,
//       };

//     case ADD_ACCOUNT:
//       //
//       let accountNew = action.account; // account2
//       return {
//         ...state,
//         listAccount: [...state.listAccount, accountNew],
//       };
//     default:
//       return {
//         ...state,
//       };
//   }
// };
// Khai báo Store
// let store = createStore(RootReducer);

// Giả sử Cần thay đổi giá trị state showForm: false => true
// Khai báo Action
// let actionShowInpuForm = {
//   type: SHOW_INPUT_FORM,
// };

console.log("State trước khi dispatch action: actionShowInpuForm: ", store.getState()); // showForm: false,
store.dispatch(actionShowInpuForm());
console.log("State sau khi dispatch action: actionShowInpuForm: ", store.getState()); // showForm: true,

// let actionCloseInpuForm = {
//   type: CLOSE_INPUT_FORM,
// };

store.dispatch(actionCloseInpuForm());
console.log("State sau khi dispatch action: actionCloseInpuForm: ", store.getState()); // showForm: false,

// Viết 1 số action liên quan tới Account

// let actionCreateNewAccount1 = {
//   type: ADD_ACCOUNT,
//   account: {
//     id: 1,
//     name: "daonq1",
//   },
// };

let account1 = {
  id: 1,
  name: "daonq1",
};
store.dispatch(actionCreateNewAccount(account1));
console.log("State sau khi dispatch action: actionCreateNewAccount1: ", store.getState()); // showForm: false,

// let actionCreateNewAccount2 = {
//   type: "ADD_ACCOUNT",
//   account: {
//     id: 2,
//     name: "daonq2",
//   },
// };

let account2 = {
  id: 2,
  name: "daonq2",
};
store.dispatch(actionCreateNewAccount(account2));
console.log("State sau khi dispatch action: actionCreateNewAccount2: ", store.getState()); // showForm: false,
