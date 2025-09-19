import { createStore } from "redux";
import { RootReducer } from "../Reducer/rootReducer";

const storeRedux = createStore(RootReducer);

export default storeRedux;
