import { BucketState } from "./bucket.state";
import * as acts from "./bucket.actions";

const initialState: BucketState = {
  bucketItems: [],
};

export default function BucketReducer(
  state: BucketState = initialState,
  action: any
): BucketState {
  switch (action.type) {
    case acts.BucketActions.SET_BUCKET_ITEM: {
      let bucketItemsCopy = [...state.bucketItems];
      const count = action.payload.count;
      const bucketItem = { ...action.payload, count: count ? count + 1 : 1 };
      if (count) {
        bucketItemsCopy = bucketItemsCopy.map((item) => {
          if (item.id === bucketItem.id) {
            return bucketItem;
          }
          return item;
        });
      } else {
        bucketItemsCopy.push(bucketItem);
      }
      return { ...state, bucketItems: bucketItemsCopy };
    }
    default: {
      return { ...state };
    }
  }
}
