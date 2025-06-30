//used mock-fs which  allows Node's built-in fs module to be backed temporarily by an in-memory, mock file system. This lets run tests against a set of mock files and directories instead of lugging around a bunch of test fixtures.
import mock from "mock-fs";
import { parseJSONFile } from "../src/parsers/JSONParser";

describe("JSONFileParser", () => {
  afterEach(() => {
    mock.restore();
  });
  it("should parse json file content", async () => {
    //Arrange
    mock({
      "fake-folder/data.json": `[{
        "Order ID": "2001",
        "Book Title": "Edge of Eternity",
        "Author": "Dan Brown",
        "Genre": "Science Fiction",
        "Format": "Paperback",
        "Language": "French",
        "Publisher": "Oxford Press",
        "Special Edition": "Signed Copy",
        "Packaging": "Eco-Friendly Packaging",
        "Price": "12",
        "Quantity": "5"
    },
    {
        "Order ID": "2002",
        "Book Title": "Beneath the Stars",
        "Author": "Dan Brown",
        "Genre": "Thriller",
        "Format": "Paperback",
        "Language": "Spanish",
        "Publisher": "Hachette Book Group",
        "Special Edition": "Limited Edition",
        "Packaging": "Standard Wrap",
        "Price": "48",
        "Quantity": "1"
    }]`,
    });
    //Act
    const result = await parseJSONFile("fake-folder/data.json");

    //Assert
    expect(result[0]).toMatchObject({
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
    });
  });
  it("should parse nested objects", async () => {
    //Arrange
    mock({
      "fake-folder/data.json": `[{
        "Order ID": "2001",
        "Book Title": "Edge of Eternity",
        "Author": {
        "Name":"Dan Brown",
        "DOB":"August 10, 2025"
        },
        "Genre": "Science Fiction",
        "Format": "Paperback",
        "Language": "French",
        "Publisher": "Oxford Press",
        "Special Edition": "Signed Copy",
        "Packaging": "Eco-Friendly Packaging",
        "Price": "12",
        "Quantity": "5"
    },
    {
        "Order ID": "2002",
        "Book Title": "Beneath the Stars",
        "Author": "Dan Brown",
        "Genre": "Thriller",
        "Format": "Paperback",
        "Language": "Spanish",
        "Publisher": "Hachette Book Group",
        "Special Edition": "Limited Edition",
        "Packaging": "Standard Wrap",
        "Price": "48",
        "Quantity": "1"
    }]`,
    });
    //Act
    const result = await parseJSONFile("fake-folder/data.json");
    //Act & Assert
    expect(result[0]).toMatchObject({
      "Order ID": "2001",
      "Book Title": "Edge of Eternity",
      Author: { Name: "Dan Brown", DOB: "August 10, 2025" },
      Genre: "Science Fiction",
      Format: "Paperback",
      Language: "French",
      Publisher: "Oxford Press",
      "Special Edition": "Signed Copy",
      Packaging: "Eco-Friendly Packaging",
      Price: "12",
      Quantity: "5",
    });
  });
  it("should parse keys with array values", async () => {
    //Arrange
    mock({
      "fake-folder/data.json": `[{
        "Order ID": "2001",
        "Book Title": "Edge of Eternity",
        "Author": ["Dan Brown","John Doe"],
        "Genre": "Science Fiction",
        "Format": "Paperback",
        "Language": "French",
        "Publisher": "Oxford Press",
        "Special Edition": "Signed Copy",
        "Packaging": "Eco-Friendly Packaging",
        "Price": "12",
        "Quantity": "5"
    },
    {
        "Order ID": "2002",
        "Book Title": "Beneath the Stars",
        "Author": "Dan Brown",
        "Genre": "Thriller",
        "Format": "Paperback",
        "Language": "Spanish",
        "Publisher": "Hachette Book Group",
        "Special Edition": "Limited Edition",
        "Packaging": "Standard Wrap",
        "Price": "48",
        "Quantity": "1"
    }]`,
    });
    //Act
    const result = await parseJSONFile("fake-folder/data.json");
    //Act & Assert
    expect(result[0]).toMatchObject({
      "Order ID": "2001",
      "Book Title": "Edge of Eternity",
      Author: ["Dan Brown", "John Doe"],
      Genre: "Science Fiction",
      Format: "Paperback",
      Language: "French",
      Publisher: "Oxford Press",
      "Special Edition": "Signed Copy",
      Packaging: "Eco-Friendly Packaging",
      Price: "12",
      Quantity: "5",
    });
  });
  it("should throw an error if a file is empty", async () => {
    //Arrange
    mock({
      "fake-folder/data.json": ``,
    });

    //Act & Assert
    expect(
      async () => await parseJSONFile("fake-folder/data.json")
    ).rejects.toThrow(new Error(`Couldn't parse JSON `));
  });
});
