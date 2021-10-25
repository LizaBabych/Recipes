import { combineReducers } from "redux";
import MenuReducer from "./menu/menu.reducer";
import SearchReducer from "./search/search.reducer";

export default combineReducers({
  menu: MenuReducer,
  search: SearchReducer,
});
