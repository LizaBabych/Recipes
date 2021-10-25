import {IMenuItem, MenuState} from "./menu.state";
import * as acts from "./menu.actions";
import {IMenuAction} from "./menu.actions";

const initialState: MenuState = {
  menuItems: [],
};

const findItem = (payload: any, items: Array<IMenuItem>, count: number) => {
  let bucketItemsCopy = [...items];
  const bucketItem = {
    ...payload,
    countInBucket: count,
  };
  return bucketItemsCopy.map((item) => {
    if (item.id === bucketItem.id) {
      return bucketItem;
    }
    return item;
  });
}

export default function MenuReducer(
  state: MenuState = initialState,
  action: IMenuAction
): MenuState {
  switch (action.type) {
    case acts.MenuActions.SET_MENU_ITEMS: {
      return { ...state, menuItems: action.payload };
    }
    case acts.MenuActions.SET_BUCKET_ITEM: {
      const count = action.payload.countInBucket;
      const newBucketItems = findItem(action.payload, state.menuItems, count ? count + 1 : 1)
      return { ...state, menuItems: newBucketItems };
    }
    case acts.MenuActions.TAKE_ITEM_FROM_BUCKET: {
      const newBucketItems = findItem(action.payload, state.menuItems, action.payload.countInBucket - 1)
      return { ...state, menuItems: newBucketItems };
    }
    case acts.MenuActions.DELETE_ITEM_BUCKET: {
      const newBucketItems = findItem(action.payload, state.menuItems, 0)
      return { ...state, menuItems: newBucketItems };
    }
    default: {
      return { ...state };
    }
  }
}
