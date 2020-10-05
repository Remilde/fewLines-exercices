import * as mongo from "mongodb";
const basicValidator = {
  additionalProperties: false,
  required: ["_id", "name", "color", "category", "size"],
};
const basicProperties = {
  _id: {
    bsonType: "objectId",
  },
  name: {
    bsonType: "string",
    maxLength: 30,
  },
  color: {
    bsonType: "string",
    maxLength: 15,
  },
};

export const sweaterProperties = {
  // write your sweater properties here
  ...basicValidator,
  properties: {
    ...basicProperties,
    size: {
      enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    },
    category: {
      enum: ["sweater"],
    },
  },
};

export const shoesProperties = {
  // write your shoes properties here
  ...basicValidator,
  properties: {
    ...basicProperties,
    size: {
      bsonType: "int",
      maximum: 50,
      minimum: 30,
    },
    category: {
      enum: ["shoes"],
    },
    material: {
      enum: ["leather", "textile", "synthetic"],
    },
  },
};

export const pantsProperties = {
  // write your pants properties here
  ...basicValidator,
  properties: {
    ...basicProperties,
    size: {
      bsonType: "object",
      additionalProperties: false,
      required: ["width"],
      properties: {
        width: {
          bsonType: "int",
          maximum: 46,
          minimum: 32,
        },
        cut: {
          enum: ["slim", "skinny", "regular", "straight"],
        },
      },
    },
    category: {
      enum: ["pants"],
    },
  },
};

export const clothesValidator = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
    },
    oneOf: [sweaterProperties, pantsProperties, shoesProperties],
  },
};

export function createClothesCollection(
  db: mongo.Db
): Promise<mongo.Collection> {
  return db.createCollection("clothes", clothesValidator);
}
