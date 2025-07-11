import {
  Book,
  Format,
  Genre,
  Language,
  Packaging,
  SpecialEdition,
} from "../model/book.model";
import { IMapper } from "./iMapper";
import { BookBuilder } from "../model/builders/book.builder";

export class JSONBookMapper implements IMapper<object, Book> {
  map(data: object): Book {
    return BookBuilder.createBuilder()
      .setTitle((data as { "Book Title": string })["Book Title"]) //tells the TypeScript compiler that data is an object that has a key called "Book Title" and that its value is a string.
      .setAuthor((data as { Author: string })["Author"])
      .setGenre((data as { Genre: Genre })["Genre"])
      .setFormat((data as { Format: Format })["Format"])
      .setLanguage((data as { Language: Language })["Language"])
      .setPublisher((data as { Publisher: string })["Publisher"])
      .setSpecialEdition(
        (data as { "Special Edition": SpecialEdition })["Special Edition"]
      )
      .setPackaging((data as { Packaging: Packaging })["Packaging"])
      .build();
  }
}
