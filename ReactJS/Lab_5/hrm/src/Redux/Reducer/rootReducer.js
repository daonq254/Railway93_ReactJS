import { combineReducers } from "redux";
import { formReducer } from "./formReducer";
import { accountReducer } from "./accountReducer";

export let RootReducer = combineReducers({
  formReducer: formReducer,
  accountReducer: accountReducer,
});
