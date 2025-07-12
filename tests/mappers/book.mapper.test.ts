import { JSONBookMapper } from "../../src/mappers/book.mapper";
describe("BookMapper", () => {
  const mapper = new JSONBookMapper();
  it("should map book data", () => {
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
    const mappedResult = mapper.map(data);
    //Assert
    expect(mappedResult).toMatchObject({
      title: "Edge of Eternity",
      author: "Dan Brown",
      genre: "Science Fiction",
      format: "Paperback",
      language: "French",
      publisher: "Oxford Press",
      specialEdition: "Signed Copy",
      packaging: "Eco-Friendly Packaging",
    });
  });
  it("should throw an error if there are missing required fields", () => {
    //Arrange
    const data = {
      "Order ID": "2001",
      "Book Title": "Edge of Eternity",
      Author: "Author Name",
      Genre: "Science Fiction",
      Format: "Paperback",
      Language: "French",
      "Special Edition": "Signed Copy",
      "Extra Field": "Signed Copy",
      Packaging: "Eco-Friendly Packaging",
      Price: "12",
      Quantity: "5",
    };

    //Assert
    expect(() => mapper.map(data)).toThrow(
      "Missing Required Fields! Couldn't Create Book"
    ); //toThrow expects the function reference, not the result of calling the function.
  });
  it("should throw an error if invalid data type provided", () => {
    //Arrange
    const data = {
      "Order ID": "2001",
      "Book Title": "Edge of Eternity",
      Author: 123, //invalid data type for Author
      Genre: "Science Fiction",
      Format: "Paperback",
      Language: "French",
      Publisher: "Oxford Press",
      "Special Edition": "Signed Copy",
      "Extra Field": "Signed Copy",
      Packaging: "Eco-Friendly Packaging",
      Price: "12",
      Quantity: "5",
    };

    //Assert
    expect(() => mapper.map(data)).toThrow(
      "Invalid Data Type! Couldn't Create Book"
    ); //toThrow expects the function reference, not the result of calling the function.
  });
});
