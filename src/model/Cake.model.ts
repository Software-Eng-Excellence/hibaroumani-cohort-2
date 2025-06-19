import { Item, ItemCategory } from "./Item.model";
//finite number of possible values
export enum CakeType {
  SPONGE = "Sponge",
  CHOCOLATE = "Chocolate",
  FRUIT = "Fruit",
  RED_VELVET = "Red Velvet",
  BIRTHDAY = "Birthday",
  MARBLE = "Marble",
  COFFE = "Coffee",
  CARROT = "Carrot",
}
//finite number of possible values
export enum CakeFlavor {
  VANILLA = "Vanilla",
  CHOCOLATE = "Chocolate",
  LEMON = "Lemon",
  STRAWBERRY = "Strawberry",
  RED_VELVET = "Red Velvet",
  PINEAPPLE = "Pineapple",
  JAM = "Jam",
  CARAMEL = "Caramel",
  FRUIT = "Fruit",
  COFFEE = "Coffee",
  MOUSSE = "Mousse",
  CREAM = "Cream",
  CREAM_CHEESE = "Cream Cheese",
  CUSTARD = "Custard",
  DARK_CHOCOLATE = "Dark Chocolate",
}
//finite number of possible values
export enum CakeFilling {
  VANILLA = "Vanilla",
  CHOCOLATE = "Chocolate",
  LEMON = "Lemon",
  STRAWBERRY = "Strawberry",
  RED_VELVET = "Red Velvet",
  PINEAPPLE = "Pineapple",
  JAM = "Jam",
  CARAMEL = "Caramel",
  FRUIT = "Fruit",
  COFFEE = "Coffee",
  MOUSSE = "Mousse",
  CREAM = "Cream",
  CREAM_CHEESE = "Cream Cheese",
  CUSTARD = "Custard",
  DARK_CHOCOLATE = "Dark Chocolate",
}
//finite number of possible values
export enum CakeSize {
  EIGHT = 8,
  FIFTEEN = 15,
  TWENTY = 20,
  TWENTY_FIVE = 25,
  THIRTY = 30,
}
export enum NumberOfLayers {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
}
export enum FrostingType {
  Butter_Cream = "Buttercream",
  Fondant = "Fondant",
  Whipped_Cream = "Whipped Cream",
  Ganache = "Ganache",
}
export enum FrostingFlavor {
  VANILLA = "Vanilla",
  CHOCOLATE = "Chocolate",
  LEMON = "Lemon",
  STRAWBERRY = "Strawberry",
  RED_VELVET = "Red Velvet",
  PINEAPPLE = "Pineapple",
  JAM = "Jam",
  CARAMEL = "Caramel",
  FRUIT = "Fruit",
  COFFEE = "Coffee",
  MOUSSE = "Mousse",
  CREAM = "Cream",
  CREAM_CHEESE = "Cream Cheese",
  CUSTARD = "Custard",
  DARK_CHOCOLATE = "Dark Chocolate",

}
export enum DecorationColor {
  MULTI_COLOR = "Multi-color",
  RED = "Red",
  YELLOW = "Yellow",
  GOLD = "Gold",
  PINK = "Pink",
  SILVER = "Silver",
  BROWN = "Brown",
  WHITE = "White",
  PURPLE = "Purple",
  BLUE = "Blue",
  GREEN = "Green",
}
//finite number of possible values
export enum CakeShape {
  ROUND = "Round",
  SQUARE = "Square",
  HEART_SHAPED = "Heart-Shaped",
  RECTANGLE = "Rectangle",
  OVAL = "Oval",

}
//finite number of possible values
export enum Allergies {
  NUT_FREE = "Nut-Free",
  GLUTEN_FREE = "Gluten-Free",
  DAIRY_FREE = "Dairy-Free",
  NONE = "None",
}
//finite number of possible values
export enum CakePackagingType {
  STANDARD_BOX = "Standard Box",
  LUXURY_BOX = "Luxury Box",
  LUXURY_BOX_WITH_RIBBON = "Luxury Box with Ribbon",
  STANDARD_BOX_WITH_RIBBON = "Standard Box with Ribbon",
  BOX = "Box",
}
export class Cake implements Item {
  getCategory(): ItemCategory {
    return ItemCategory.CAKE;
  }
  //immutable properties (cannot be modified). once constructed, no modification is allowed
  private type: CakeType;
  private flavor: CakeFlavor;
  private filling: CakeFilling;
  private size: CakeSize;
  private layers: NumberOfLayers;
  private frostingType: FrostingType;
  private frostingFlavor: FrostingFlavor;
  private decorationType: string;
  private decorationColor: DecorationColor;
  private customMessage: string;
  private shape: CakeShape;
  private allergies: Allergies;
  private specialIngredients: string;
  private packagingType: CakePackagingType;

  constructor(
    type: CakeType,
    flavor: CakeFlavor,
    filling: CakeFilling,
    size: CakeSize,
    layers: NumberOfLayers,
    frostingType: FrostingType,
    frostingFlavor: FrostingFlavor,
    decorationType: string,
    decorationColor: DecorationColor,
    customMessage: string,
    shape: CakeShape,
    allergies: Allergies,
    specialIngredients: string,
    packagingType: CakePackagingType
  ) {
    this.type = type;
    this.flavor = flavor;
    this.filling = filling;
    this.size = size;
    this.layers = layers;
    this.frostingType = frostingType;
    this.frostingFlavor = frostingFlavor;
    this.decorationType = decorationType;
    this.decorationColor = decorationColor;
    this.customMessage = customMessage;
    this.shape = shape;
    this.allergies = allergies;
    this.specialIngredients = specialIngredients;
    this.packagingType = packagingType;
  }

  getType(): CakeType {
    return this.type;
  }

  getFlavor(): CakeFlavor {
    return this.flavor;
  }

  getFilling(): CakeFilling {
    return this.filling;
  }

  getSize(): CakeSize {
    return this.size;
  }

  getLayers(): NumberOfLayers {
    return this.layers;
  }

  getFrostingType(): FrostingType {
    return this.frostingType;
  }

  getFrostingFlavor(): FrostingFlavor {
    return this.frostingFlavor;
  }

  getDecorationType(): string {
    return this.decorationType;
  }

  getDecorationColor(): DecorationColor {
    return this.decorationColor;
  }

  getCustomMessage(): string {
    return this.customMessage;
  }

  getShape(): CakeShape {
    return this.shape;
  }

  getAllergies(): Allergies {
    return this.allergies;
  }

  getSpecialIngredients(): string {
    return this.specialIngredients;
  }

  getPackagingType(): CakePackagingType {
    return this.packagingType;
  }
}
