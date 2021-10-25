import { IDish } from "../../types";
import {IMenuItem} from "./menu.state";

export enum MenuActions {
  SET_MENU_ITEMS = "[menu flow] set menu items",
  SET_BUCKET_ITEM = "[bucket flow] set bucket item",
  TAKE_ITEM_FROM_BUCKET = "[bucket flow] remove item from bucket",
  DELETE_ITEM_BUCKET = "[bucket flow] delete item from bucket",
}

export const SetMenuItemsAct = (items: IDish[]) => {
  return {
    type: MenuActions.SET_MENU_ITEMS,
    payload: items,
  };
};

export const SetItemToBucketAct = (item: IDish) => {
  return {
    type: MenuActions.SET_BUCKET_ITEM,
    payload: item,
  };
};

export const RemoveItemFromBucketAct = (item: IMenuItem) => {
  return {
    type: MenuActions.TAKE_ITEM_FROM_BUCKET,
    payload: item,
  };
};

export const DeleteItemFromBucketAct = (item: IMenuItem) => {
  return {
    type: MenuActions.DELETE_ITEM_BUCKET,
    payload: item,
  };
};

export interface IMenuAction {
  type: MenuActions,
  payload: any
}
