/*
    - Definition: 
        Stands for eXtensible Markup Language and is known for its self-descriptive nature, where each piece of data is encapsulated in tags, forming a clear hierarchy.
        A widely used format for storing and exchanging structured data. 
    - Used Library:
        TypeScript's xml2js library. 
*/
//necessary packages
import fs from "fs";
import logger from "../util/logger";
import xml2js from "xml2js";

export async function parseXMLFile(filePath: string): Promise<object[]> {
  const parser = new xml2js.Parser({ explicitArray: false }); //return single-value elements as plain values instead of wrapping them in arrays.This will make elements like <title>Book A</title> be parsed as:{ book: { title: "Book A" } } instead of: { book: { title: ["Book A"] } }
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        logger.error("Couldn't read XML File: ", err);
        reject(err);
        throw new Error("Couldn't read XML File");
      }

      parser.parseString(data, (error, parsedData) => {
        if (error) {
          logger.error("Couldn't parse XML File: ", error);
          reject(error);
          throw new Error("Couldn't parse XML File");
        }
        resolve(parsedData?.data?.row);//data is an object containing row object which is an array of objects 
      });
    });
  });
}
