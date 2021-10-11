import { MenuState } from "./menu.state";
import * as acts from "./menu.actions";

const initialState: MenuState = {
  menuItems: [],
};

export default function MenuReducer(
  state: MenuState = initialState,
  action: any
): MenuState {
  switch (action.type) {
    case acts.MenuActions.SET_MENU_ITEMS: {
      return { ...state, menuItems: action.payload };
    }
    default: {
      return { ...state };
    }
  }
}
