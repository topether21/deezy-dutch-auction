import * as compression from "compression";
import * as path from "path";
import { Request, Response, NextFunction } from "express";
import * as express from "express";
import ApplicationError from "./errors/application-error";
import * as winston from "winston";

const app = express();

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.json(),
});

function logResponseTime(req: Request, res: Response, next: NextFunction) {
  const startHrTime = process.hrtime();

  res.on("finish", () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    const message = `${req.method} ${res.statusCode} ${elapsedTimeInMs}ms\t${req.path}`;

    logger.debug(message, { label: "API" });
  });

  next();
}

app.use(logResponseTime);

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

app.use(
  (err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
      return next(err);
    }

    return res.status(err.status || 500).json({
      error: err.message,
    });
  }
);

export default app;
