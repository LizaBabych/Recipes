import { IDish } from "../../types";

export enum MenuActions {
  SET_MENU_ITEMS = "[menu flow] set menu items",
}

export const SetMenuItemsAct = (items: IDish[]) => {
  return {
    type: MenuActions.SET_MENU_ITEMS,
    payload: items,
  };
};
