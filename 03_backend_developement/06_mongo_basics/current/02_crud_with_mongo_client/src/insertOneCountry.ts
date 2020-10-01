import * as mongo from "mongodb";
import { Country } from "./type";

export function insertOneCountry(db: mongo.Db): Promise<Country> {
  const montelimar = {
    name: "Montelimar",
    capital: "Monteliville",
    continent: "Europe",
  };
  return db
    .collection("worldAtlas")
    .insertOne(montelimar)
    .then((result) => {
      return result.ops[0];
    });
}
