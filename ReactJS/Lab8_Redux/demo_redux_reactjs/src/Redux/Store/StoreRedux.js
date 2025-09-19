import { RootReducer } from "../Reducers/rootReducer";
import { createStore } from "redux";

export let store = createStore(RootReducer);
