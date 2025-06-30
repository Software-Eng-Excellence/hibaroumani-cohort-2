//Importing necessary Libraries & Files
import mock from "mock-fs";
import { parseCSVFile } from "../src/parsers/CSVParser";
describe("CSVFileParser", () => {
  it("Should parse a simple csv file without quotations", async () => {
    //Arrange
    const content = `id,Type,Flavor,Filling,Size,Layers,Frosting Type,Frosting Flavor,Decoration Type,Decoration Color,Custom Message,Shape,Allergies,Special Ingredients,Packaging Type,Price,Quantity
    0,Sponge,Vanilla,Cream,20,2,Buttercream,Vanilla,Sprinkles,Multi-color,Happy Birthday,Round,Nut-Free,Organic Ingredients,Standard Box,50,1`;
    mock({
      "testData/data.csv": content,
    });
    //Act
    const parsedContent = await parseCSVFile("testData/data.csv");
    //Assert
    expect(parsedContent[0]).toEqual([
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
    ]);
  });
  it("Should parse a simple csv file with quotations", async () => {
    //Arrange
    const content = `"id","Type","Flavor","Filling","Size","Layers","Frosting Type","Frosting Flavor","Decoration Type","Decoration Color","Custom Message","Shape","Allergies","Special Ingredients","Packaging Type","Price","Quantity"
"0","Sponge","Vanilla","Cream","20","2","Buttercream","Vanilla","Sprinkles","Multi-color","Happy Birthday","Round","Nut-Free","Organic Ingredients","Standard Box","50","1"`;
    mock({
      "testData/data.csv": content,
    });
    //Act
    const parsedContent = await parseCSVFile("testData/data.csv");
    //Assert
    expect(parsedContent[0]).toEqual([
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
    ]);
  });
  it("Should Should  return an empty array if the file is empty", async () => {
    //Arrange
    const content = ``;
    mock({
      "testData/data.csv": content,
    });
    //Act
    const parsedContent = await parseCSVFile("testData/data.csv");
    //Assert
    expect(parsedContent).toEqual([]);
  });
  it("Should parse a fields with a coma", async () => {
    //Arrange
    const content = `"id","Type,1","Flavor","Filling","Size","Layers","Frosting Type","Frosting Flavor","Decoration Type","Decoration Color","Custom Message","Shape","Allergies","Special Ingredients","Packaging Type","Price","Quantity"
"0","Sponge","Vanilla","Cream","20","2","Buttercream","Vanilla","Sprinkles","Multi-color","Happy Birthday","Round","Nut-Free","Organic Ingredients","Standard Box","50","1"`;
    mock({
      "testData/data.csv": content,
    });
    //Act
    const parsedContent = await parseCSVFile("testData/data.csv", true);
    //Assert
    expect(parsedContent[0]).toEqual([
      "id",
      "Type,1",
      "Flavor",
      "Filling",
      "Size",
      "Layers",
      "Frosting Type",
      "Frosting Flavor",
      "Decoration Type",
      "Decoration Color",
      "Custom Message",
      "Shape",
      "Allergies",
      "Special Ingredients",
      "Packaging Type",
      "Price",
      "Quantity",
    ]);
  });
  it("Should parse files with empty lines", async () => {
    //Arrange
    const content = `"id","Type","Flavor","Filling","Size","Layers","Frosting Type","Frosting Flavor","Decoration Type","Decoration Color","Custom Message","Shape","Allergies","Special Ingredients","Packaging Type","Price","Quantity"

"0","Sponge","Vanilla","Cream","20","2","Buttercream","Vanilla","Sprinkles","Multi-color","Happy Birthday","Round","Nut-Free","Organic Ingredients","Standard Box","50","1"`;
    mock({
      "testData/data.csv": content,
    });
    //Act
    const parsedContent = await parseCSVFile("testData/data.csv", true);
    //Assert
    expect(parsedContent).toEqual([
      [
        "id",
        "Type",
        "Flavor",
        "Filling",
        "Size",
        "Layers",
        "Frosting Type",
        "Frosting Flavor",
        "Decoration Type",
        "Decoration Color",
        "Custom Message",
        "Shape",
        "Allergies",
        "Special Ingredients",
        "Packaging Type",
        "Price",
        "Quantity",
      ],
      [
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
      ],
    ]);
  });
  it("should throw an error if there is missing fields", () => {
    //Arrange
    const content = `"id","Type","Flavor","Filling","Size","Layers","Frosting Type","Frosting Flavor","Decoration Type","Decoration Color","Custom Message","Shape","Allergies","Special Ingredients","Packaging Type","Price","Quantity"
"0","Sponge","Vanilla","Cream","2","Buttercream","Vanilla","Sprinkles","Multi-color","Happy Birthday","Round","Nut-Free","Organic Ingredients","Standard Box","50","1"`;
    mock({
      "testData/data.csv": content,
    });
    const errorMsg = new Error(
      `Invalid Record Length: expect 17, got 16 on line 2`
    );
    //Act & Assert
    expect(async () => await parseCSVFile("testData/data.csv")).rejects.toThrow(
      new Error(`Failed to parse CSV File: ${errorMsg}`)
    ); //expect(...).toThrow() is only for sync functions that throw immediately, not Promises;therefore.rejects is needed
  });
});
