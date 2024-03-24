import express from "express";
import con from './connection';


const server = express();

server.get("/", () => {
  console.log("BATEU");
});

server.get("/usuario", () => {
  con.query('SELECT * FROM USUARIO ORDER BY nome DESC', (err, result) => {
    if(err){
      res.send(err)
    }
    res.send(result);
  })
});
export default server;
