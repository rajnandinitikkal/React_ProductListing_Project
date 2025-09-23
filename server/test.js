import { MongoClient } from "mongodb";

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {};

const client = await MongoClient.connect(
  "mongodb+srv://rajnandinitikkal_db_user:ReactProjectEcommerce@newcluster.xglv9ou.mongodb.net/?retryWrites=true&w=majority&appName=NewCluster"
);
const coll = client.db("products-data").collection("product");
const cursor = coll.find(filter);
const result = await cursor.toArray();
await client.close();
