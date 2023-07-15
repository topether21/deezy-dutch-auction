import * as dotenv from "dotenv";
dotenv.config();

import * as cors from "cors";
import * as http from "http";
import * as socketIo from "socket.io";
import { Request, Response } from "express";
import { createClient } from "redis";
import { createAdapter } from "@socket.io/redis-adapter";
import app from "./app";
import { CONNECTION, DISCONNECT } from "./messages";
import "./libs/graphql";

const PORT = parseInt(process.env.PORT || "3000");
app.set("port", PORT);
app.use(cors());

const server = http.createServer(app);
const io = new socketIo.Server(server, {
  cors: {
    origin: "*",
  },
});

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

  console.log("Redis connected");

  io.adapter(createAdapter(pubClient, subClient));
  io.on(CONNECTION, async (socket) => {
    console.log("a user connected", socket.id);
    socket.on(DISCONNECT, () => {
      console.log(`a user disconnected [${socket.id}]`);
    });
    socket.on("message", (data: any) => {
      const message = {
        message: "pong",
        data,
        id: socket.id,
      };
      console.log("emit --> ", message);
      io.emit("message", message);
    });
  });

  server.listen(PORT, async () => {
    console.log(`listening on *:${PORT}`);
  });
})();
