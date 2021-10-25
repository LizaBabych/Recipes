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
    case acts.MenuActions.SET_BUCKET_ITEM: {
      let bucketItemsCopy = [...state.menuItems];
      const count = action.payload.countInBucket;
      const bucketItem = {
        ...action.payload,
        countInBucket: count ? count + 1 : 1,
      };
      bucketItemsCopy = bucketItemsCopy.map((item) => {
        if (item.id === bucketItem.id) {
          return bucketItem;
        }
        return item;
      });
      return { ...state, menuItems: bucketItemsCopy };
    }
    case acts.MenuActions.TAKE_ITEM_FROM_BUCKET: {
      let bucketItemsCopy = [...state.menuItems];
      const bucketItem = {
        ...action.payload,
        countInBucket: 0,
      };
      bucketItemsCopy = bucketItemsCopy.map((item) => {
        if (item.id === bucketItem.id) {
          return bucketItem;
        }
        return item;
      });
      return { ...state, menuItems: bucketItemsCopy };
    }
    case acts.MenuActions.DELETE_ITEM_BUCKET: {
      let bucketItemsCopy = [...state.menuItems];
      const bucketItem = {
        ...action.payload,
        countInBucket: 0,
      };
      bucketItemsCopy = bucketItemsCopy.map((item) => {
        if (item.id === bucketItem.id) {
          return bucketItem;
        }
        return item;
      });
      return { ...state, menuItems: bucketItemsCopy };
    }
    default: {
      return { ...state };
    }
  }
}
