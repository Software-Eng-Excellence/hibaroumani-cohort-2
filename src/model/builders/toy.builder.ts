import {   AgeGroup, Bool, Material, Toy, ToyType,  } from "../Toy.model";
import logger from "../../util/logger";

export class ToyBuilder {
  private type!: ToyType;
  private ageGroup!: AgeGroup;
  private brand!: string;
  private material!: Material;
  private batteryRequired!: Bool;
  private educational!: Bool;

  setType(type: ToyType): ToyBuilder {
    this.type = type;
    return this;
  }

  setAgeGroup(ageGroup: AgeGroup): ToyBuilder {
    this.ageGroup = ageGroup;
    return this;
  }

  setBrand(brand: string): ToyBuilder {
    this.brand = brand;
    return this;
  }

  setMaterial(material: Material): ToyBuilder {
    this.material = material;
    return this;
  }

  setBatteryRequired(batteryRequired: Bool): ToyBuilder {
    this.batteryRequired = batteryRequired;
    return this;
  }

  setEducational(educational: Bool): ToyBuilder {
    this.educational = educational;
    return this;
  }
  build(): Toy {
    const requiredProperties = [
      this.type,
      this.ageGroup,
      this.brand,
      this.material,
      this.batteryRequired,
      this.educational,
    ];
    for (const prop of requiredProperties) {
      if (!prop) {
        logger.error("Toy is not created! Missing Required Fields.");
        throw new Error("Toy is not created! Missing Required Fields.");
      }
    }
    return new Toy(
      this.type,
      this.ageGroup,
      this.brand,
      this.material,
      this.batteryRequired,
      this.educational
    );
  }
}
