import { createStore } from "redux";
console.log("Redux Core");
// Khai báo ra các state cần quản lý
let intinalState = {
  showForm: false,
};
// Khai báo reducer
let reducer = (state = intinalState, action) => {
  //
  switch (action.type) {
    case "SHOW_INPUT_FORM":
      //
      return {
        ...state,
        showForm: true,
      };

    default:
      return {
        ...state,
      };
  }
};
// Khai báo Store
let store = createStore(reducer);

// Giả sử Cần thay đổi giá trị state showForm: false => true
// Khai báo Action
let actionShowInpuForm = {
  type: "SHOW_INPUT_FORM",
};

console.log("State trước khi dispatch action: actionShowInpuForm: ", store.getState()); // showForm: false,
store.dispatch(actionShowInpuForm);
console.log("State sau khi dispatch action: actionShowInpuForm: ", store.getState()); // showForm: true,
