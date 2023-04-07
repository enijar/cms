import * as express from "express";
import { json } from "body-parser";
import * as cors from "cors";
import config from "../config";
import cookies from "../middleware/cookies";
import content from "../actions/content";

const app = express();

app.use(json());
app.use(
  cors({
    origin(origin, next) {
      if (origin && !config.corsOrigins.includes(origin)) {
        return next(new Error("Not allowed by CORS"));
      }
      next(null, true);
    },
    credentials: true,
  })
);
app.use(cookies);

app.post("/api/content", content);

export default app;
