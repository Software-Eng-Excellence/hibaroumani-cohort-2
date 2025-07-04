import { CSVCakeMapper } from "../../src/mappers/cake.mapper";
describe("CakeCSVCakeMapper", () => {
  const mapper = new CSVCakeMapper();
  it("should map cake data", () => {
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
    const mappedResult = mapper.map(data);
    //Assert
    expect(mappedResult).toMatchObject({
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
    });
  });
  it("should map cake data without custom message", () => {
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
      "",
      "Round",
      "Nut-Free",
      "Organic Ingredients",
      "Standard Box",
      "50",
      "1",
    ];
    //Act
    const mappedResult = mapper.map(data);
    //Assert
    expect(mappedResult).toMatchObject({
      type: "Sponge",
      flavor: "Vanilla",
      filling: "Cream",
      size: 20,
      layers: 2,
      frostingType: "Buttercream",
      frostingFlavor: "Vanilla",
      decorationType: "Sprinkles",
      decorationColor: "Multi-color",
      shape: "Round",
      allergies: "Nut-Free",
      specialIngredients: "Organic Ingredients",
      packagingType: "Standard Box",
    });
  });
  it("should throw an error if data has missing required field", () => {
    //Arrange
    const data = [
      "0",
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
    //Act & Assert
    expect(async () => await mapper.map(data)).rejects.toThrow(
      new Error(`Missing Required Fields`)
    );
  });
});
