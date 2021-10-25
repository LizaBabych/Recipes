import { IDish } from "../../types";

export interface IMenuItem extends IDish {
  countInBucket: number;
}

export interface MenuState {
  menuItems: Array<IMenuItem>;
}
