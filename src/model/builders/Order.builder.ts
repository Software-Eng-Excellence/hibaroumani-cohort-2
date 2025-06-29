import { IItem } from "model/IItem.interface";
import { Order } from "model/Order.model";

export class OrderBuilder {
  private item!: IItem;
  private id!: string;
  private price!: number;
  private quantity!: number;

  static createBuilder(): OrderBuilder {
    return new OrderBuilder();
  }

  setItem(item: IItem): OrderBuilder {//return this allows chaining
    this.item = item;
    return this;
  }
  setId(id: string): OrderBuilder {
    this.id = id;
    return this;
  }
  setPrice(price: number): OrderBuilder {
    this.price = price;
    return this;
  }
  setQuantity(quantity: number): OrderBuilder {
    this.quantity = quantity;
    return this;
  }

  build(): Order {
    const requiredProperties = [this.item, this.id, this.price, this.quantity];
    for (const prop of requiredProperties) {
      if (!prop) {
        throw new Error(`Missing Required Properties, couldn't create order`);
      }
    }
    return new Order(this.item, this.id, this.price, this.quantity);
  }
}
