import { combineReducers } from "redux";
import BucketReducer from "./bucket/bucket.reducer";
import MenuReducer from "./menu/menu.reducer";

export default combineReducers({
  bucket: BucketReducer,
  menu: MenuReducer,
});
