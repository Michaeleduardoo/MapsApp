import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import cors from "cors";
import * as StoreControll from "./src/api/StoreControll";

const PORT = process.env.PORT || 3000;

async function startup() {
  await createConnection();
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.post("//store", StoreControll.save);
  app.get("//store", StoreControll.getAll);

  app.listen(PORT, () => {
    console.log("App running on port " + 3000);
  });
}

startup();
