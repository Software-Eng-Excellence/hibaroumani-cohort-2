import { CSVCakeMapper } from "../../src/mappers/cake.mapper";
import { JSONBookMapper } from "../../src/mappers/book.mapper";
import { XMLToyMapper } from "../../src/mappers/toy.mapper";
import {
  CSVOrderMapper,
  JSONOrderMapper,
  XMLOrderMapper,
} from "../../src/mappers/order.mapper";

describe("CSVOrderMpper", () => {
  let cakeMapper: CSVCakeMapper;
  let orderMapper: CSVOrderMapper;
  beforeAll(() => {
    cakeMapper = new CSVCakeMapper();
    orderMapper = new CSVOrderMapper(cakeMapper);
  });
  it("should map a csv order correctly", () => {
    //Arrange
    const data = [
      "0",
      "Sponge",
      "Vanilla",
      "Cream",
      "20",
      "2",
      "Buttercream",
      "Vanilla",
      "Sprinkles",
      "Multi-color",
      "Happy Birthday",
      "Round",
      "Nut-Free",
      "Organic Ingredients",
      "Standard Box",
      "50",
      "1",
    ];

    //Act
    const mappedResult = orderMapper.map(data);
    //Assert
    expect(mappedResult).toMatchObject({
      item: {
        type: "Sponge",
        flavor: "Vanilla",
        filling: "Cream",
        size: 20,
        layers: 2,
        frostingType: "Buttercream",
        frostingFlavor: "Vanilla",
        decorationType: "Sprinkles",
        decorationColor: "Multi-color",
        customMessage: "Happy Birthday",
        shape: "Round",
        allergies: "Nut-Free",
        specialIngredients: "Organic Ingredients",
        packagingType: "Standard Box",
      },
      id: "0",
      price: 1,
      quantity: 50,
    });
  });
});

describe("JSONOrderMpper", () => {
  let bookMapper: JSONBookMapper;
  let orderMapper: JSONOrderMapper;

  beforeAll(() => {
    bookMapper = new JSONBookMapper();
    orderMapper = new JSONOrderMapper(bookMapper);
  });

  it("should map a book order", () => {
    //Arrange
    const data = {
      "Order ID": "2001",
      "Book Title": "Edge of Eternity",
      Author: "Dan Brown",
      Genre: "Science Fiction",
      Format: "Paperback",
      Language: "French",
      Publisher: "Oxford Press",
      "Special Edition": "Signed Copy",
      Packaging: "Eco-Friendly Packaging",
      Price: "12",
      Quantity: "5",
    };

    //Act
    const mappedResult = orderMapper.map(data);
    //Assert
    expect(mappedResult).toMatchObject({
      item: {
        title: "Edge of Eternity",
        author: "Dan Brown",
        genre: "Science Fiction",
        format: "Paperback",
        language: "French",
        publisher: "Oxford Press",
        specialEdition: "Signed Copy",
        packaging: "Eco-Friendly Packaging",
      },
      id: "2001",
      price: "12",
      quantity: "5",
    });
  });
});

describe("XMLOrderMpper", () => {
  let toyMapper: XMLToyMapper;
  let orderMapper: XMLOrderMapper;

  beforeAll(() => {
    toyMapper = new XMLToyMapper();
    orderMapper = new XMLOrderMapper(toyMapper);
  });
  it("should map a toy order", () => {
    //Arrange
    const data = {
      OrderID: "5001",
      Type: "Plush Toy",
      AgeGroup: "13+",
      Brand: "FunTime",
      Material: "Fabric",
      BatteryRequired: "Yes",
      Educational: "Yes",
      Price: "247",
      Quantity: "7",
    };

    //Act
    const mappedResult = orderMapper.map(data);
    //Assert
    expect(mappedResult).toMatchObject({
      item: {
        type: "Plush Toy",
        ageGroup: "13+",
        brand: "FunTime",
        material: "Fabric",
        batteryRequired: "Yes",
        educational: "Yes",
      },
      id: "5001",
      price: "247",
      quantity: "7",
    });
  });
});
