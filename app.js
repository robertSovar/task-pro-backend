import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectToMongoDB from "./utils/connectToDb.js";
import logger from "morgan";
import authRouter from "./routes/api/auth.js";

const app = express();

const formatLoggers = app.get("env") === "development" ? "dev" : "short";
connectToMongoDB();

app.use(logger(formatLoggers));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
export default app;
