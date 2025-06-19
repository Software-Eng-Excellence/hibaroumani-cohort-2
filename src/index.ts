import { CakeBuilder } from "./model/builders/cake.builder";
import { CakeType } from "./model/Cake.model";
import { CakeFlavor } from "./model/Cake.model";
import { CakeFilling } from "./model/Cake.model";
import { CakeSize } from "./model/Cake.model";
import { NumberOfLayers } from "./model/Cake.model";
import { FrostingType } from "./model/Cake.model";
import { FrostingFlavor } from "./model/Cake.model";
import { DecorationColor } from "./model/Cake.model";
import { CakeShape } from "./model/Cake.model";
import { Allergies } from "./model/Cake.model";
import { CakePackagingType } from "./model/Cake.model";

async function main() {
  // Import statements are already present above.
  // No additional code needed here for imports.
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
  console.log("New Cake Created:", newCake);
}
main();
