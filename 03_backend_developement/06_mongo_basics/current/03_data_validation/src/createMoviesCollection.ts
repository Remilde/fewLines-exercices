import * as mongo from "mongodb";

export const moviesValidator = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      additionalProperties: false,
      required: ["_id", "title", "genre", "year"],
      properties: {
        _id: {
          bsonType: "objectId",
        },
        title: {
          bsonType: "string",
        },
        genre: {
          bsonType: "string",
          enum: ["action", "comedy", "dramatic", "horror"],
        },
        year: {
          bsonType: "int",
          maximum: 2020,
          minimum: 1950,
        },
        ratings: {
          bsonType: "object",
          additionalProperties: false,
          required: ["pressRating", "spectatorsRating"],
          properties: {
            pressRating: {
              bsonType: "int",
              maximum: 5,
              minimum: 1,
            },
            spectatorsRating: {
              bsonType: "int",
              maximum: 5,
              minimum: 1,
            },
          },
        },
      },
    },
  },
};

export function createMoviesCollection(
  db: mongo.Db
): Promise<mongo.Collection> {
  return db.createCollection("movies", moviesValidator);
}
