import { CONTINENTS, CITIES } from "../data/data";
export function displayList(): void {
  console.log("Here is the list of continent to chose from:\n\n");
  for (const item in CONTINENTS) {
    if (isNaN(parseInt(item))) {
      console.log(item);
    }
  }
}
