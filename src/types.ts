export interface IDish {
  description: string;
  dish: string;
  id: number;
  img?: string;
  ingredient: Array<string>;
  receipt: Array<string>;
  likes?: number;
  measurement: string;
  price?: number;
  uid: string;
}
