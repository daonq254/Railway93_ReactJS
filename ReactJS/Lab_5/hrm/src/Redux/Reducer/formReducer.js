import { CLOSE_INPUT_FORM_, SHOW_INPUT_FORM_ } from "../Contants/FormActionType";

let intinalState = {
  showForm: false,
};
// Khai báo reducer
export let formReducer = (state = intinalState, action) => {
  //
  switch (action.type) {
    case SHOW_INPUT_FORM_:
      //
      return {
        ...state,
        showForm: true,
      };

    case CLOSE_INPUT_FORM_:
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
