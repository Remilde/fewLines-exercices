import * as mongo from "mongodb";
import { Country } from "./type";

export function insertManyCountries(db: mongo.Db): Promise<Country[]> {
  const montelimar = {
    name: "Montelimar",
    capital: "Monteliville",
    continent: "Europe",
  };
  const neverland = {
    name: "Neverland",
    capital: "Neverville",
    continent: "Europe",
  };
  return db
    .collection("worldAtlas")
    .insertMany([montelimar, neverland])
    .then((result) => {
      return result.ops;
    });
}
