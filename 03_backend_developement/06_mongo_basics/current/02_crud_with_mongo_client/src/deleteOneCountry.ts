import * as mongo from "mongodb";

export function deleteOneCountry(db: mongo.Db) {
  return db
    .collection("worldAtlas")
    .deleteOne({ name: "France" })
    .then((result) => {
      return result.deletedCount === 1;
    });
}
