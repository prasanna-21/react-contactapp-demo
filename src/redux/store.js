import { createStore } from "redux";
// import { contactReducer } from "./store";
import contactReducer from "./reducers/contactReducer";

// import { reducer } from "./reducers/reducers";
const store = createStore(
  contactReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
