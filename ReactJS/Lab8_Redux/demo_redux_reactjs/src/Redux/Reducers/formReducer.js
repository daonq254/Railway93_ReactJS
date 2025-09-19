import { CLOSE_INPUT_FORM, SHOW_INPUT_FORM } from "../Constants/FormActionType";

let intinalState = {
  showForm: false,
};
// Khai báo reducer
export let formReducer = (state = intinalState, action) => {
  //
  switch (action.type) {
    case SHOW_INPUT_FORM:
      //
      return {
        ...state,
        showForm: true,
      };

    case CLOSE_INPUT_FORM:
      //
      return {
        ...state,
        showForm: false,
      };

    default:
      return {
        ...state,
      };
  }
};
