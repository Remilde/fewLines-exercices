import * as mongo from "mongodb";

export function deleteManyCountries(db: mongo.Db) {
  return db
    .collection("worldAtlas")
    .deleteMany({ continent: "Europe" })
    .then((result) => {
      return result.deletedCount === result.result.n && result.deletedCount > 0;
    });
}
