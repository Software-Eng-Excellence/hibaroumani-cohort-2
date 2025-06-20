/*
1. CSV Definition:
    CSV which stands for Comma-Separated Values, is a file format that stores tabular data, such as a database or spreadsheet, in plain text. Each line in a CSV file corresponds to a row in the table, and each value is separated by a comma. CSV files are popular because they are simple and easily processed by a variety of programs, including Excel and most data analysis tools.
2. CSV Format:
    The CSV file is naturally formatted as a table. Here is an example:
        Name,Age,Occupation
        John,28,Engineer
        Alice,34,Doctor
        Bob,23,Artist
    It uses new lines for rows and a separator (in this case, a comma) for columns.
3. Understanding and Using CSV Libraries
    - TypeScript has a rich ecosystem that supports various libraries to handle CSV files. One such library is csv-parser, which offers an efficient way to read and parse CSV data.
    - installation: npm install csv-parser @types/csv-parser and provides straightforward methods for parsing CSV files.
4. Opening and Managing CSV Files
    - Before we can parse CSV data, we need to open the file properly. TypeScript can utilize Node.js's fs module for file handling. Instead of opening files directly, we use the fs.createReadStream method to stream the data, which is efficient and well-suited for handling different file sizes.A stream can be thought of as items on a conveyor belt being processed one at a time rather than in large batches.
5. Reading and Parsing CSV Content
    - To parse the contents of a CSV file using csv-parser, we must first understand two important methods used in the process:
        1. .pipe(): In the context of our CSV parsing, .pipe() is used to channel data from one stream to another. Specifically, we use it to funnel data from the file reading stream created by fs.createReadStream into the csv-parser stream. This action effectively transforms the raw file data into parsed CSV data row by row.
        2. .on(): This method is crucial for handling the event-driven nature of streams. In the case of parsing CSV files, we use .on('data', ...) to listen for the 'data' event, which is emitted each time the csv-parser processes a line of the CSV file. Each row of data is sent as an object with specific types to the provided callback function, allowing us to work with the data as it streams.
*/
//Importing needed libraries
import fs, { ReadStream } from "fs";
import csvParser from "csv-parser";
import { Cake } from "../model/Cake.model";

export async function parseCSVFile(filePath: string): Promise<Cake[]> {
  //declaring variables for data streaming
  const stream: ReadStream = fs.createReadStream(filePath); //This stream object allows us to read
  // from the CSV file asynchronously, making it ideal for processing large files.
  //Declaring Variables for Storing Extracted Data
  const result: Cake[] = [];
  return new Promise<Cake[]>((resolve, reject) => {
    stream
      .pipe(csvParser())
      .on("data", (row: Cake) => {
        //As the stream reads the file, each row is parsed and printed as an object to the console. This method allows for efficient, row-by-row processing.
        result.push(row);
      })
      .on("end", () => {
        resolve(result);
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}
