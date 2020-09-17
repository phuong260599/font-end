import { combineReducers } from "redux";
import { default as ProducItem } from "./productItem";

const reducer = combineReducers({
  ProducItem: ProducItem,
});
export default reducer;