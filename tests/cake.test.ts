import { CakeBuilder } from "../src/model/builders/cake.builder";
import {
  Allergies,
  CakeFilling,
  CakeFlavor,
  CakePackagingType,
  CakeShape,
  CakeSize,
  CakeType,
  DecorationColor,
  FrostingFlavor,
  FrostingType,
  NumberOfLayers,
} from "../src/model/Cake.model";

describe("Add New Cake", () => {
  //Success Cases
  it("should add a cake successfully",  () => {
    //Arrange
    const cakeType = CakeType.BIRTHDAY;
    const cakeFlavor = CakeFlavor.VANILLA;
    const cakeFilling = CakeFilling.VANILLA;
    const cakeSize = CakeSize.EIGHT;
    const layers = NumberOfLayers.TWO;
    const frostingType = FrostingType.Butter_Cream;
    const frostingFlavor = FrostingFlavor.VANILLA;
    const decorationType = "Sprinkles";
    const decorationColor = DecorationColor.MULTI_COLOR;
    const customMessage = "Happy Birthday!";
    const shape = CakeShape.ROUND;
    const allergies = Allergies.NONE;
    const specialIngredients = "None";
    const packagingType = CakePackagingType.BOX;
    //Act
    const newCake = new CakeBuilder()
      .setType(cakeType)
      .setFlavor(cakeFlavor)
      .setFilling(cakeFilling)
      .setSize(cakeSize)
      .setLayers(layers)
      .setFrostingType(frostingType)
      .setFrostingFlavor(frostingFlavor)
      .setDecorationType(decorationType)
      .setDecorationColor(decorationColor)
      .setCustomMessage(customMessage)
      .setShape(shape)
      .setAllergies(allergies)
      .setSpecialIngredients(specialIngredients)
      .setPackagingType(packagingType)
      .build();
    //Assert
    expect(newCake).toEqual({
      type: "Birthday",
      flavor: "Vanilla",
      filling: "Vanilla",
      size: 8,
      layers: 2,
      frostingType: "Buttercream",
      frostingFlavor: "Vanilla",
      decorationType: "Sprinkles",
      decorationColor: "Multi-color",
      customMessage: "Happy Birthday!",
      shape: "Round",
      allergies: "None",
      specialIngredients: "None",
      packagingType: "Box",
    });
  });
  //Edge Cases
  it("should not add a cake with missing required fields",  () => {
    //Arrange
    const cakeType = CakeType.BIRTHDAY;
    const cakeFlavor = CakeFlavor.VANILLA;
    const cakeFilling = CakeFilling.VANILLA;
    //Act & Assert
    expect(() =>
      new CakeBuilder()
        .setType(cakeType)
        .setFlavor(cakeFlavor)
        .setFilling(cakeFilling)
        .build()
    ).toThrow(`Missing Required Fields`); //function reference to expect since it delays the function execution until expect can handle it.
  });

});
