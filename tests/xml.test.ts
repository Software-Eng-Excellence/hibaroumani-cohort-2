import mock from "mock-fs";
import { parseXMLFile } from "../src/parsers/XMLParser";
describe("XML Parser", () => {
  afterEach(() => {
    mock.restore();
  });
  it("should parse json file content", async () => {
    //Arrange
    mock({
      "testData/data.xml": `<data>
    <row>
        <OrderID>5001</OrderID>
        <Type>Plush Toy</Type>
        <AgeGroup>13+</AgeGroup>
        <Brand>FunTime</Brand>
        <Material>Fabric</Material>
        <BatteryRequired>Yes</BatteryRequired>
        <Educational>Yes</Educational>
        <Price>247</Price>
        <Quantity>7</Quantity>
    </row>
    <row>
        <OrderID>5002</OrderID>
        <Type>Building Blocks</Type>
        <AgeGroup>8-12</AgeGroup>
        <Brand>BuildSmart</Brand>
        <Material>Plastic</Material>
        <BatteryRequired>Yes</BatteryRequired>
        <Educational>Yes</Educational>
        <Price>67</Price>
        <Quantity>1</Quantity>
    </row>
    </data>`,
    });
    //Act
    const result = await parseXMLFile("testData/data.xml");

    //Assert
    expect(result[0]).toMatchObject({
      OrderID: "5001",
      Type: "Plush Toy",
      AgeGroup: "13+",
      Brand: "FunTime",
      Material: "Fabric",
      BatteryRequired: "Yes",
      Educational: "Yes",
      Price: "247",
      Quantity: "7",
    });
  });
  it("should return undefined if a file is empty", async () => {
    //Arrange
    mock({
      "testData/data.xml": ``,
    });
    //Act
    const result = await parseXMLFile("testData/data.xml");

    //Assert
    expect(result).toBe(undefined);
  });
});
