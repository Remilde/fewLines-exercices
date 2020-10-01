import * as mongo from "mongodb";
import { Country } from "./type";
const databaseUrl = process.env.MONGODB_URI || "";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

export function findOneCountry(db: mongo.Db): Promise<Country> {
  // code your function here
  return db
    .collection("worldAtlas")
    .findOne({ name: "Iceland" })
    .then((result) => {
      return result;
    });
}
