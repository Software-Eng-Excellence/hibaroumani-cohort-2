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
    - installation: npm install csv-pars and provides straightforward methods for parsing CSV files.
4. Opening and Managing CSV Files
    - Before we can parse CSV data, we need to open the file properly. TypeScript can utilize Node.js's fs module for file handling. Instead of opening files directly, we use the fs.createReadStream method to stream the data, which is efficient and well-suited for handling different file sizes.A stream can be thought of as items on a conveyor belt being processed one at a time rather than in large batches.
5. Reading and Parsing CSV Content
    
*/
//Importing needed libraries
import fs from "fs";
import { parse } from "csv-parse";

export async function parseCSVFile(
  filePath: string,
  includeHeaders: boolean = false
): Promise<string[][]> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
        throw new Error(`Failed to read CSV File: ${err}`);
      }
      parse(
        data,
        { trim: true, skip_empty_lines: true, relax_column_count: false },
        (err, parsedData: string[][]) => {
          if (err) {
            reject(err);
            throw new Error(`Failed to parse CSV File: ${err}`);
          }
          if (!includeHeaders) parsedData.shift();
          resolve(parsedData);
        }
      );
    }); //takes time
    //since reading file takes time, we'll wrap it with a promise, but working with another promise doesn't work since by the time the second promise is called, the first might not have finished
  });
}
