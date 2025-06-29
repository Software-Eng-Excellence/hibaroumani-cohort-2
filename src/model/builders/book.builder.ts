import logger from "../../util/logger";
import {
  Book,
  Format,
  Genre,
  Language,
  Packaging,
  SpecialEdition,
} from "../Book.model";

export class BookBuilder {
  //Declaring Attributes
  private title!: string; //mendatory field
  private author!: string;
  private isbn!: string;
  private publishedYear!: number;
  private genre!: Genre;
  private format!: Format;
  private language!: Language;
  private publisher!: string;
  private specialEdition!: SpecialEdition;
  private packaging!: Packaging;

  //Attributes Setters
  public setTitle(title: string): BookBuilder {
    this.title = title;
    return this;
  }

  public setAuthor(author: string): BookBuilder {
    this.author = author;
    return this;
  }

  public setIsbn(isbn: string): BookBuilder {
    this.isbn = isbn;
    return this;
  }

  public setPublishedYear(publishedYear: number): BookBuilder {
    this.publishedYear = publishedYear;
    return this;
  }

  public setGenre(genre: Genre): BookBuilder {
    this.genre = genre;
    return this;
  }

  public setFormat(format: Format): BookBuilder {
    this.format = format;
    return this;
  }

  public setLanguage(language: Language): BookBuilder {
    this.language = language;
    return this;
  }

  public setPublisher(publisher: string): BookBuilder {
    this.publisher = publisher;
    return this;
  }

  public setSpecialEdition(specialEdition: SpecialEdition): BookBuilder {
    this.specialEdition = specialEdition;
    return this;
  }

  public setPackaging(packaging: Packaging): BookBuilder {
    this.packaging = packaging;
    return this;
  }
  //build func
  build(): Book {
    //defining required properties for the class to ensure all are initialized when building a Book
    const requiredProperties = [
      this.title,
      this.author,
      this.isbn,
      this.publishedYear,
      this.genre,
      this.format,
      this.language,
      this.publisher,
      this.specialEdition,
      this.packaging,
    ];
    for (const prop of requiredProperties) {
      if (!prop) {
        logger.error("Missing Required Fields! Couldn't Create Book");
        throw new Error("Missing Required Fields! Couldn't Create Book");
      }
    }
    //validating 10- and 13-digit ISBNs
    let isbnRegex = new RegExp(
      "^(?=(?:[^0-9]*[0-9]){10}(?:(?:[^0-9]*[0-9]){3})?$)[\\d-]+$"
    );

    if (!isbnRegex.test(this.isbn) === true) {
      logger.error("Invalid ISBN format");
      throw new Error("Invalid ISBN format");
    }
    if(this.publishedYear> new Date().getFullYear()) {
      logger.error("Published year cannot be in the future");
      throw new Error("Published year cannot be in the future");
    }
    return new Book(
      this.title,
      this.author,
      this.isbn,
      this.publishedYear,
      this.genre,
      this.format,
      this.language,
      this.publisher,
      this.specialEdition,
      this.packaging
    );
  }
}
