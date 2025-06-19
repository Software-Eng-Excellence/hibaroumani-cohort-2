import { ToyBuilder } from "../src/model/builders/toy.builder";
import { AgeGroup, Bool, Material, ToyType } from "../src/model/Toy.model";

describe("Add New Toy", () => {
  //success cases
  it("should create a new toy successfully", () => {
    const toy = new ToyBuilder()
      .setType(ToyType.ACTION_FIGURE)
      .setAgeGroup(AgeGroup.FOUR_TO_SEVEN)
      .setBrand("ToyBrand")
      .setMaterial(Material.PLASTIC)
      .setBatteryRequired(Bool.FALSE)
      .setEducational(Bool.TRUE)
      .build();

    expect(toy).toEqual({
      type: "Action Figure",
      ageGroup: "4-7",
      brand: "ToyBrand",
      material: "Plastic",
      batteryRequired: "No",
      educational: "Yes",
    });
  });
  //Edge cases
  it("should throw an error when required fields are missing", () => {
    //Arraange within Act within Assert
    expect(() => {
      new ToyBuilder()
        .setType(ToyType.ACTION_FIGURE)
        .setAgeGroup(AgeGroup.FOUR_TO_SEVEN)
        .setBrand("ToyBrand")
        .setMaterial(Material.PLASTIC)
        .setBatteryRequired(Bool.FALSE)
        // Missing educational field
        .build();
    }).toThrow("Toy is not created! Missing Required Fields.");
  });
});
