import { parseJSONFile } from "./parsers/JSONParser";
import { parseCSVFile } from "./parsers/CSVParser";
import { parseXMLFile } from "./parsers/XMLParser";


async function main() {
  const toys=await parseXMLFile('src/data/toy orders.xml')
  console.log(toys[0])

}
main();
