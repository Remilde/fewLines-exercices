import { CONTINENTS, CITIES } from "../data/data";
export function cityPicking(continent: CONTINENTS): string {
  const alea: number = Math.floor(Math.random() * 4);

  console.log(CONTINENTS[continent]);

  //   const index = CONTINENTS[continent];
  //   const monArray: string[] = CITIES[1]
  //   console.log(index);
  return CONTINENTS[alea];
}
