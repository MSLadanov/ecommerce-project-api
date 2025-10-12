import express from "express";
import router from "./routes/index.ts";
import db from "./config/db.ts";
import { ErrorHandling } from "./middleware/ErrorHandling.ts";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/static", express.static("static"));

app.use("/api/v1", router);

app.use(ErrorHandling);

app.listen(3000, () => {
  try {
    db.sync();
  } catch (error) {
    console.log("Database sync error");
  }
  console.log(`Server started on port: ${3000}`);
});
