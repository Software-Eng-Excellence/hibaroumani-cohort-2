import { Order } from "../model/order.model";
import { IOrder } from "../model/iOrder.interface";
import { IMapper } from "./iMapper";
import { OrderBuilder } from "../model/builders/order.builder";
import { IItem } from "../model/iItem.interface";

export class CSVOrderMapper implements IMapper<string[], Order> {
  //dependency insertion. abstraction
  constructor(private itemMapper: IMapper<string[], IItem>) {} //an itemMapper implements IMapper for mapping any item received, to its corresponding class(i.e Cake, Book, Toy)
  map(data: string[]): Order {
    //map function implementation defined by IMapper implemented by CSVOrderMapper Class
    const item: IItem = this.itemMapper.map(data); //mapping the item to store it inside the order as an object using itemMapper.map() implemented insiede CakeMapper
    return OrderBuilder.createBuilder()
      .setItem(item)
      .setId(data[0])
      .setPrice(parseFloat(data[data.length - 1]))
      .setQuantity(parseInt(data[data.length - 2]))
      .build();
  }
  //now the result will be the whole order (i.e.  {...cake implemented properties},id, price,quantity)
}

export class JSONOrderMapper implements IMapper<object, Order> {
  constructor(private itemMapper: IMapper<object, IItem>) {} //IItem for abstraction
  map(data: object): Order {
    const item: IItem = this.itemMapper.map(data);
    return OrderBuilder.createBuilder()
      .setItem(item)
      .setId((data as { "Order ID": string })["Order ID"])
      .setPrice((data as { Price: number })["Price"])
      .setQuantity((data as { Quantity: number })["Quantity"])
      .build();
  }
}

export class XMLOrderMapper implements IMapper<object, Order> {
  //Class Constructor
  constructor(private itemMapper: IMapper<object, IItem>) {}
  map(data: object): Order {
    const item = this.itemMapper.map(data);
    return OrderBuilder.createBuilder()
      .setItem(item)
      .setId((data as { OrderID: string })["OrderID"])
      .setPrice((data as { Price: number })["Price"])
      .setQuantity((data as { Quantity: number })["Quantity"])
      .build();
  }
}
