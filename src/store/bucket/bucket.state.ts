import { IDish } from "../../types";

interface IBucketItems extends IDish {
  count: number;
}

export interface BucketState {
  bucketItems: Array<IBucketItems>;
}
