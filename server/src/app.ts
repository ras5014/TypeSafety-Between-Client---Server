import express from "express";
import pino from "pino";
import cors from "cors";
import helmet from "helmet";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(helmet());

const logger = pino();

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

export { app, logger };
