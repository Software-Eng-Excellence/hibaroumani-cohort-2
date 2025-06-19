import { Item, ItemCategory } from "./Item.model";

export enum Genre {
  SCIENCE_FICTION="Science Fiction",
  THRILLER="Thriller",
  BIOGRAPHY="Biography",
  MYSTERY="Mystery",
  FANTASY="Fantasy",
  ROMANCE="Romance",
  HISTORICAL_FICTION="Historical Fiction",
  NON_FICTION="Non-Fiction",
  YOUNG_ADULT="Young Adult",
  HORROR="Horror",
}
export enum Format {
  PAPERBACK = "Paperback",
  HARDCOVER = "Hardcover",
  AUDIOBOOK = "Audiobook",
  E_BOOK = "E-Book",
}
export enum Language {
  FRENCH = "French",
  SPANISH = "Spanish",
  JAPANESE = "Japanese",
  ENGLISH = "English",
  CHINESE = "Chinese",
  GERMAN = "German",
  ITALIAN = "Italian",
}
export enum SpecialEdition {
  SIGNED_COPY = "Signed Copy",
  LIMITED_EDITION = "Limited Edition",
  NONE = "None",
  COLLECTORS_EDITION = "Collector's Edition",
  ILLUSTRATED_EDITION = "Illustrated Edition",
}
export enum Packaging {
  ECO_FRIENDLY = "Eco-Friendly Packaging",
  STANDARD_WRAP = "Standard Wrap",
  LUXURY_BOX = "Luxury Box",
  GIFT_WRAP = "Gift Wrap",
}

export class Book implements Item {
  //Book is an Item with a Specific Category (BOOK)
  getCategory() {
    return ItemCategory.BOOK;
  }
  private title: string;
  private author: string;
  private isbn: string;
  private publishedYear: number;
  private genre: Genre;
  private format: Format;
  private language: Language;
  private publisher: string;
  private specialEdition: SpecialEdition;
  private packaging: Packaging;

  constructor(
    title: string,
    author: string,
    isbn: string,
    publishedYear: number,
    genre: Genre,
    format: Format,
    language: Language,
    publisher: string,
    specialEdition: SpecialEdition,
    packaging: Packaging
  ) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.publishedYear = publishedYear;
    this.genre = genre;
    this.format = format;
    this.language = language;
    this.publisher = publisher;
    this.specialEdition = specialEdition;
    this.packaging = packaging;
  }

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }

  getIsbn(): string {
    return this.isbn;
  }

  getPublishedYear(): number {
    return this.publishedYear; //Make publishedYear a String
  }

  getGenre(): Genre {
    return this.genre;
  }

  getFormat(): Format {
    return this.format;
  }

  getLanguage(): Language {
    return this.language;
  }

  getPublisher(): string {
    return this.publisher;
  }

  getSpecialEdition(): SpecialEdition {
    return this.specialEdition;
  }

  getPackaging(): Packaging {
    return this.packaging;
  }
}
