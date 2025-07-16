import { MongoClient } from "mongodb";

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {};

const client = await MongoClient.connect(
  "mongodb+srv://rajnandinitikkal:ecommerce1password@cluster1.ixdrzsw.mongodb.net/products-data?retryWrites=true&w=majority"
);
const coll = client.db("products-data").collection("product");
const cursor = coll.find(filter);
const result = await cursor.toArray();
await client.close();
