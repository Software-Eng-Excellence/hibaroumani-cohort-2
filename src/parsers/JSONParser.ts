/*
    - To parse the JSON data, we use TypeScript's JSON.parse() function, adding type definitions for clarity and safety.
*/
//necessary packages
import fs from "fs";
import logger from "../util/logger";
export async function parseJSONFile(filePath: string): Promise<object[]> {
  return new Promise((resolve, reject) => {
    //reading the file using fs.readFile...
    fs.readFile(filePath, "utf-8", (err, data) => {
      //Error Reading file
      if (err) {
        logger.error("Couldn't read JSON File: ", err);
        reject(err);
        throw new Error("Couldn't read JSON File");
      }
      //File Read Successfully...
      //When working with JSON parsing, errors might occur
      try {
        const parsedData = JSON.parse(data); //JSON. parse() method parses a string and returns a JavaScript object.parses the entire file content as one JSON object
        resolve(parsedData)//[{obj1},{obj2}]
      } catch (error) {
        logger.error("Error parsing JSON:", error);
        reject(error);
        throw new Error("Couldn't parse JSON ");
      }

    });
  });
}
