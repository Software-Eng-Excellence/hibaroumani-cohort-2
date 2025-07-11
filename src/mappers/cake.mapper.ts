import {
  Allergies,
  Cake,
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
} from "../model/cake.model";
import { IMapper } from "./iMapper";
import { CakeBuilder } from "../model/builders/cake.builder";

export class CSVCakeMapper implements IMapper<string[], Cake> {
  //maps string to cake object
  map(data: string[]): Cake {
    return CakeBuilder.createBuilder()
      .setType(data[1] as CakeType)
      .setFlavor(data[2] as CakeFlavor)
      .setFilling(data[3] as CakeFilling)
      .setSize(parseInt(data[4]) as CakeSize)
      .setLayers(parseInt(data[5]) as NumberOfLayers)
      .setFrostingType(data[6] as FrostingType)
      .setFrostingFlavor(data[7] as FrostingFlavor)
      .setDecorationType(data[8])
      .setDecorationColor(data[9] as DecorationColor)
      .setCustomMessage(data[10])
      .setShape(data[11] as CakeShape)
      .setAllergies(data[12] as Allergies)
      .setSpecialIngredients(data[13])
      .setPackagingType(data[14] as CakePackagingType)
      .build();
  }
}
