const express = require("express");
const { Tag, Explore } = require("./scrapeLogic");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/Tag", (req, res) => {
  Tag(res);
});

app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
