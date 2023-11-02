require("dotenv").config();

const dbUri = process.env.DB_URI;

const { MongoClient } = require("mongodb");

const main = async () => {
  const client = new MongoClient(dbUri);
  await client.connect();
  console.log("connected");

  //   const result = await client.db().admin().listDatabases();
  //   console.log(result);
  const database = client.db("orders");
  const collection = database.collection("orders");
  const count = await collection.countDocuments();
  console.log(count);
};

main();
