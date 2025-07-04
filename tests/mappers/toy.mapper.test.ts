import { XMLToyMapper } from "../../src/mappers/toy.mapper";
describe("ToyMapper", () => {
  const mapper = new XMLToyMapper();
  it("should map toy data successfully", () => {
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
    const mappedResult = mapper.map(data);
    //Assert
    expect(mappedResult).toMatchObject({
      type: "Plush Toy",
      ageGroup: "13+",
      brand: "FunTime",
      material: "Fabric",
      batteryRequired: "Yes",
      educational: "Yes",
    });
  });
  it("should throw an error if there are missing required fields", () => {
    //Arrange
    const data = {
      OrderID: "5001",
      Type: "Plush Toy",
      AgeGroup: "13+",
      Material: "Fabric",
      BatteryRequired: "Yes",
      Educational: "Yes",
      Price: "247",
      Quantity: "7",
    };

    //Assert
    expect(() => mapper.map(data)).toThrow(
      "Toy is not created! Missing Required Fields."
    ); //toThrow expects the function reference, not the result of calling the function.
  });
  it("should throw an error if invalid data type provided", () => {
    //Arrange
    const data = {
      OrderID: "5001",
      Type: "Plush Toy",
      AgeGroup: "13+",
      Brand: 1, //
      Material: "Fabric",
      BatteryRequired: "Yes",
      Educational: "Yes",
      Price: "247",
      Quantity: "7",
    };

    //Assert
    expect(() => mapper.map(data)).toThrow(
      "Toy is not created! Invalid Data Type"
    ); //toThrow expects the function reference, not the result of calling the function.
  });
});
