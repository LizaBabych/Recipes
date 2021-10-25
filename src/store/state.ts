import { MenuState } from "./menu/menu.state";
import { SearchState } from "./search/search.state";

export interface AppState {
  menu: MenuState;
  search: SearchState;
}
