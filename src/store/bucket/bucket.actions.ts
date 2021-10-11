import { IDish } from "../../types";

export enum BucketActions {
  SET_BUCKET_ITEM = "[bucket flow] set bucket item",
}

export const SetItemToBucketAct = (item: IDish) => {
  return {
    type: BucketActions.SET_BUCKET_ITEM,
    payload: item,
  };
};
