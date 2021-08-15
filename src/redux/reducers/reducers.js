import { combineReducers } from "redux";
import contactReducer from "./reducers/contactReducer";

export const reducer = combineReducers({
  all_Contacts: contactReducer,
});
