import { BucketState } from "./bucket/bucket.state";
import { MenuState } from "./menu/menu.state";

export interface AppState {
  bucket: BucketState;
  menu: MenuState;
}
