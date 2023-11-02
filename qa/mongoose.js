const mongoose = require("mongoose");
require("dotenv").config();

const dbUri = process.env.DB_URI;

const main = async () => {
  const connection1 = await mongoose.createConnection(dbUri, { dbName: "db1" });
  const connection2 = await mongoose.createConnection(dbUri, { dbName: "db2" });

  const model1 = await connection1.model(
    "model1",
    mongoose.Schema({ name: String }),
    "model_1"
  );

  const model2 = await connection2.model(
    "model2",
    mongoose.Schema({ name: String }),
    "model_2"
  );

  model1.insertMany([{ name: "1" }]);
  model2.insertMany([{ name: "2" }]);
};

main();
