import { Interface } from "readline";
import { CONTINENTS, CITIES } from "./data/data";
import { displayList } from "./utils/display";
import { cityPicking } from "./utils/filter";
function holidayLocationFinder(reader: Interface): void {
  displayList();
  reader.question("Please input your choice\n >", (choix) => {
    reader.close();
  });
}

// Leave the line below for tests to work properly.
export { holidayLocationFinder };
