export interface Item {
  getCategory(): ItemCategory;//Cake, Book, Toys,...
}

export enum ItemCategory {
  CAKE,
  BOOK,
  TOY,
}
//Item Categories:
//Cake
//Book,
//Toys