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
    return new Book(
      this.title,
      this.author,
      this.genre,
      this.format,
      this.language,
      this.publisher,
      this.specialEdition,
      this.packaging
    );
  }
}
