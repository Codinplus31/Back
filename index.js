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
  .then(e=>{
    return e.text();
  }).then(e=>{

    
  res.send(e);
  })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
