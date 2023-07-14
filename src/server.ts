import * as dotenv from "dotenv";
dotenv.config();

import * as express from "express";
import * as http from "http";
import * as socketIo from "socket.io";
import * as ngrok from "ngrok";
import { Request, Response } from "express";
import { createClient } from "redis";
import { createAdapter } from "@socket.io/redis-adapter";
import app from "./app";
import { CONNECTION, DISCONNECT, REQUEST_INSCRIPTION } from "./messages";
import { NEW_USER } from "./db";

const PORT = parseInt(process.env.PORT || "3000");
app.set("port", PORT);

// Custom CORS Middleware
app.use((req: Request, res: Response, next: express.NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Intercepts OPTIONS method
  if ("OPTIONS" === req.method) {
    // Respond with 200
    res.send(200);
  } else {
    next();
  }
});

const server = http.createServer(app);
const io = new socketIo.Server(server);

const pubClient = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT || "17549"),
  },
});

const subClient = pubClient.duplicate();
const db = pubClient.duplicate();

app.get("/status", (req: Request, res: Response) => {
  res.send({
    status: "ok",
  });
});

app.get("/", (req: Request, res: Response) => {
  res.sendFile("index.html", {
    root: __dirname,
  });
});

(async () => {
  await Promise.all([pubClient.connect(), subClient.connect(), db.connect()]);

  io.adapter(createAdapter(pubClient, subClient));
  io.on(CONNECTION, async (socket) => {
    await db.LPUSH(NEW_USER, `${socket.id}`);
    console.log("a user connected", socket.id);
    socket.on(DISCONNECT, () => {
      console.log(`a user disconnected [${socket.id}]`);
      db.LREM(NEW_USER, 1, `${socket.id}`);
    });
    socket.on(REQUEST_INSCRIPTION, (data: any) => {
      console.log(REQUEST_INSCRIPTION, data);
      io.emit("s:status", {
        message: "pong",
        data,
        id: socket.id,
      });
    });
  });

  server.listen(PORT, async () => {
    console.log(`listening on *:${PORT}`);
    if (process.env.NODE_ENV === "development") {
      const url = await ngrok.connect({
        addr: PORT,
        authtoken: process.env.NGROK_AUTH_TOKEN,
      });
      console.log(`Server listening on http://localhost:${PORT}`);
      console.log(`Ngrok Tunnel: ${url}`);
    }
  });
})();
