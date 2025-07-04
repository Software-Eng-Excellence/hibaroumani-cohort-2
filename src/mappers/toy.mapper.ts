import { AgeGroup, Bool, Material, Toy, ToyType } from "model/toy.model";
import { IMapper } from "./iMapper";
import { ToyBuilder } from "../model/builders/toy.builder";

export class XMLToyMapper implements IMapper<object, Toy> {
  map(data: object): Toy {
    return ToyBuilder.createBuilder()
      .setType((data as { Type: ToyType })["Type"])
      .setAgeGroup((data as { AgeGroup: AgeGroup })["AgeGroup"])
      .setBrand((data as { Brand: string })["Brand"])
      .setMaterial((data as { Material: Material })["Material"])
      .setBatteryRequired(
        (data as { BatteryRequired: Bool })["BatteryRequired"]
      )
      .setEducational((data as { Educational: Bool })["Educational"])
      .build();
  }
}
