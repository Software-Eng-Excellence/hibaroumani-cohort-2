import logger from "../../util/logger";
import { Allergies, Cake, CakeFilling, CakeFlavor, CakeShape, CakeSize, CakeType, DecorationColor, FrostingFlavor, NumberOfLayers, CakePackagingType, FrostingType } from "..//Cake.model";

export class CakeBuilder {
  private type!: CakeType; //! tells property will for sure have a value. better be checked for (if implemented inside build())
  private flavor!: CakeFlavor;
  private filling!: CakeFilling;
  private size!: CakeSize;
  private layers!: NumberOfLayers;
  private frostingType!: FrostingType;
  private frostingFlavor!: FrostingFlavor;
  private decorationType!: string;
  private decorationColor!: DecorationColor;
  private customMessage!: string;
  private shape!: CakeShape;
  private allergies!: Allergies;
  private specialIngredients!: string;
  private packagingType!: CakePackagingType;

  setType(type: CakeType): CakeBuilder {
    this.type = type;
    return this; //return CakeBuilder itself. allows to access any func of CakeBuilder from another func (method chaining)
  }

  setFlavor(flavor: CakeFlavor): CakeBuilder {
    this.flavor = flavor;
    return this;
  }

  setFilling(filling: CakeFilling): CakeBuilder {
    this.filling = filling;
    return this;
  }

  setSize(size: CakeSize): CakeBuilder {
    this.size = size;
    return this;
  }

  setLayers(layers: NumberOfLayers): CakeBuilder {
    this.layers = layers;
    return this;
  }

  setFrostingType(frostingType: FrostingType): CakeBuilder {
    this.frostingType = frostingType;
    return this;
  }

  setFrostingFlavor(frostingFlavor: FrostingFlavor): CakeBuilder {
    this.frostingFlavor = frostingFlavor;
    return this;
  }

  setDecorationType(decorationType: string): CakeBuilder {
    this.decorationType = decorationType;
    return this;
  }

  setDecorationColor(decorationColor: DecorationColor): CakeBuilder {
    this.decorationColor = decorationColor;
    return this;
  }

  setCustomMessage(customMessage: string): CakeBuilder {
    this.customMessage = customMessage;
    return this;
  }

  setShape(shape: CakeShape): CakeBuilder {
    this.shape = shape;
    return this;
  }

  setAllergies(allergies: Allergies): CakeBuilder {
    this.allergies = allergies;
    return this;
  }

  setSpecialIngredients(specialIngredients: string): CakeBuilder {
    this.specialIngredients = specialIngredients;
    return this;
  }

  setPackagingType(packagingType: CakePackagingType): CakeBuilder {
    this.packagingType = packagingType;
    return this;
  }
  build(): Cake {
    const requiredProperties = [
      this.type,
      this.flavor,
      this.filling,
      this.size,
      this.layers,
      this.frostingType,
      this.frostingFlavor,
      this.decorationType,
      this.decorationColor,
      this.customMessage,
      this.shape,
      this.allergies,
      this.specialIngredients,
      this.packagingType,
    ];
    for (const prop of requiredProperties) {
      if (!prop) {
        logger.error(`Missing Required Fields! Couldn't build cake.`);
        throw new Error(`Missing Required Fields`); //to be handled by the class/function creating a Cake using try/catch for example
      }
    }
    return new Cake(
      this.type,
      this.flavor,
      this.filling,
      this.size,
      this.layers,
      this.frostingType,
      this.frostingFlavor,
      this.decorationType,
      this.decorationColor,
      this.customMessage,
      this.shape,
      this.allergies,
      this.specialIngredients,
      this.packagingType
    );
  }
}
