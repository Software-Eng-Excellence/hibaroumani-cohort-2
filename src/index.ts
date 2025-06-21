import logger from "./util/logger";
import { parseCSVFile } from "./parsers/CSVParser";
import path from "path";

const cakeOrdersFilePath = path.join(
  __dirname,
  "../",
  "src/data/cake orders.csv"
);

const main = async () => {
  await parseCSVFile(cakeOrdersFilePath);
  
};

main();
