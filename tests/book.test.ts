import { BookBuilder } from "../src/model/builders/book.builder";
import {
  Genre,
  Format,
  Language,
  SpecialEdition,
  Packaging,
} from "../src/model/Book.model";

describe("Add a new Book", () => {
  it("should create a new book successfully", () => {
    const book = new BookBuilder()
      .setTitle("The Great Gatsby")
      .setAuthor("F. Scott Fitzgerald")
      .setIsbn("9780743273565")
      .setPublishedYear(1925)
      .setGenre(Genre.YOUNG_ADULT)
      .setFormat(Format.HARDCOVER)
      .setLanguage(Language.ENGLISH)
      .setPublisher("Scribner")
      .setSpecialEdition(SpecialEdition.NONE)
      .setPackaging(Packaging.GIFT_WRAP)
      .build();

    expect(book).toEqual({
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "9780743273565",
      publishedYear: 1925,
      genre: Genre.YOUNG_ADULT,
      format: Format.HARDCOVER,
      language: Language.ENGLISH,
      publisher: "Scribner",
      specialEdition: SpecialEdition.NONE,
      packaging: Packaging.GIFT_WRAP,
    });
  });
  //edge cases
  it("should throw an error if required fields are missing", () => {
    const builder = new BookBuilder();
    expect(() => builder.build()).toThrow(
      "Missing Required Fields! Couldn't Create Book"
    );
  });
  it("should throw an error if isbn is not a valid format", () => {
    const newBook = new BookBuilder()
      .setTitle("The Great Gatsby")
      .setAuthor("F. Scott Fitzgerald")
      .setIsbn("invalid-isbn")
      .setPublishedYear(1925)
      .setGenre(Genre.YOUNG_ADULT)
      .setFormat(Format.HARDCOVER)
      .setLanguage(Language.ENGLISH)
      .setPublisher("Scribner")
      .setSpecialEdition(SpecialEdition.NONE)
      .setPackaging(Packaging.GIFT_WRAP);

    expect(() => newBook.build()).toThrow("Invalid ISBN format");
  });
  it("should thrown an error if published year is in the future", () => {
    const futureYear = new Date().getFullYear() + 1; // Next year
    const newBook = new BookBuilder()
      .setTitle("The Great Gatsby")
      .setAuthor("F. Scott Fitzgerald")
      .setIsbn("9780743273565")
      .setPublishedYear(futureYear) // Simulating future year
      .setGenre(Genre.YOUNG_ADULT)
      .setFormat(Format.HARDCOVER)
      .setLanguage(Language.ENGLISH)
      .setPublisher("Scribner")
      .setSpecialEdition(SpecialEdition.NONE)
      .setPackaging(Packaging.GIFT_WRAP);

    expect(() => newBook.build()).toThrow(
      "Published year cannot be in the future"
    );
  });
});
