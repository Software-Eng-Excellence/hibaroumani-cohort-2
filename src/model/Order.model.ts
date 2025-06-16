import { Item } from "./Item.model";

export interface Order {
  getItem(): Item;
  getId(): string;
  getPrice(): number;
  getQuantity(): number;
}
