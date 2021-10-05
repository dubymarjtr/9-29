import express from "express";
import { promises as fs } from "fs";

const app = express();

app.get("/hello", (_, res) => {
  fs.readFile("./hello.html", "utf-8").then((contents) => {
    res.end(contents);
  });
});

app.get("/bye", (_, res) => {
  fs.readFile("./bye.html", "utf-8").then((contents) => {
    res.end(contents);
  });
});

app.listen(3000, () => {
  console.log("Server running");
});
