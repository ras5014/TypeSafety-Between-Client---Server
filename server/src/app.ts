import express from "express";
import pino from "pino";
import cors from "cors";
import helmet from "helmet";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(helmet());
import { errorHandler, notFound } from "./middlewares/errorHandler";

const logger = pino();

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/todos", (await import("./routes/todos.route")).todosRouter);

// Middlewares for handling error
app.use(notFound);
app.use(errorHandler);

export { app, logger };
