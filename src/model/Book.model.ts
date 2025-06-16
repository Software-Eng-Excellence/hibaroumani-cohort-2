import { Item, ItemCategory } from "./Item.model";

export class Book implements Item {
  //Book is an Item with a Specific Category (BOOK)
  getCategory() {
    return ItemCategory.BOOK;
  }
  private title: string;
  private author: string;
  private isbn: string;
  private publishedYear: number;
  private genre: string;
  private format: string;
  private language: string;
  private publisher: string;
  private specialEdition: string;
  private packaging: string;

  constructor(
    title: string,
    author: string,
    isbn: string,
    publishedYear: number,
    genre: string,
    format: string,
    language: string,
    publisher: string,
    specialEdition: string,
    packaging: string
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

  getGenre(): string {
    return this.genre;
  }

  getFormat(): string {
    return this.format;
  }

  getLanguage(): string {
    return this.language;
  }

  getPublisher(): string {
    return this.publisher;
  }

  getSpecialEdition(): string {
    return this.specialEdition;
  }

  getPackaging(): string {
    return this.packaging;
  }
}
