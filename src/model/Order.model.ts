import { IItem } from "./IItem.interface";

export class Order {
  private item: IItem;
  private id: string;
  private price: number;
  private quantity: number;

  constructor(item: IItem, id: string, price: number, quantity: number) {
    this.item = item;
    this.id = id;
    this.price = price;
    this.quantity = quantity;
  }

  getItem(): IItem {
    return this.item;
  }
  getId(): string {
    return this.id;
  }
  getPrice(): number {
    return this.price;
  }
  getQuantity(): number {
    return this.quantity;
  }
}
