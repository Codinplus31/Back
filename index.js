const express = require("express");
const { Tag, Explore } = require("./scrapeLogic");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/Tag", (req, res) => {
  Tag(res);
});

app.get("/Explore", (req, res) => {
  Explore(res);
});
    
                 
app.get("/", (req, res) => {
  fetch("https://www.aliexpress.com/w/wholesale-Recommend.html?osf=history&spm=a2g0n.category.header.0")
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    let arr = [];
    const element = doc.querySelectorAll("span")
      .forEach(e=>{
      //arr.push(e)
        res.send(e)
      });

    // Do something with the selected element
    
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
