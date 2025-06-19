import { Item, ItemCategory } from "./Item.model";

export enum ToyType {
  PLUSH_TOY = "Plush Toy",
  BUILDING_BLOCKS = "Building Blocks",
  ACTION_FIGURE = "Action Figure",
  DOLL = "Doll",
  PUZZLE = "Puzzle",
  ART_KIT = "Art Kit",
  REMOTE_CAR = "Remote Car",
  EDUCATIONAL_TOY = "Educational Toy",
  BOARD_GAME = "Board Game",
  RC_DRONE = "RC Drone",
}
export enum AgeGroup {
  ZERO_TO_THREE = "0-3",
  FOUR_TO_SEVEN = "4-7",
  EIGHT_TO_TWELVE = "8-12",
  THIRTEEN_AND_ABOVE = "13+",
}
export enum Material {
  FABRIC = "Fabric",
  PLASTIC = "Plastic",
  FOAM = "Foam",
  WOOD = "Wood",
  METAL = "Metal",
}
export enum Bool{
  TRUE="Yes",
  FALSE="No",
}
export class Toy implements Item {
  getCategory(): ItemCategory {
    return ItemCategory.TOY;
  }
  private type: ToyType;
  private ageGroup: AgeGroup;
  private brand: string;
  private material: Material;
  private batteryRequired: Bool;
  private educational: Bool;

  constructor(
    type: ToyType,
    ageGroup: AgeGroup,
    brand: string,
    material: Material,
    batteryRequired: Bool,
    educational: Bool
  ) {
    this.type = type;
    this.ageGroup = ageGroup;
    this.brand = brand;
    this.material = material;
    this.batteryRequired = batteryRequired;
    this.educational = educational;
  }

  get Type(): ToyType {
    return this.type;
  }

  get AgeGroup(): AgeGroup {
    return this.ageGroup;
  }

  get Brand(): string {
    return this.brand;
  }

  get Material(): Material {
    return this.material;
  }

  get BatteryRequired(): Bool {
    return this.batteryRequired;
  }

  get Educational(): Bool {
    return this.educational;
  }
}
