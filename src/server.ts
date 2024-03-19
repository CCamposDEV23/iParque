import express from "express";

const server = express();

server.get("/", () => {
  console.log("BATEU");
});
export default server;
