import { IItem } from "./IItem.interface";

export interface IOrder {
  getItem(): IItem;
  getId(): string;
  getPrice(): number;
  getQuantity(): number;
}
