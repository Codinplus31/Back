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
  fetch("https://www.ebay.com/globaldeals?_trkparms=parentrq%3Ac112604d18d0ad992fa3e59affff15d8%7Cpageci%3Af16bdf6f-cf17-11ee-8990-a2eda311502c%7Ciid%3A1%7Cvlpname%3Avlp_homepage")
  .then(e=>{
    return e.text();
  }).then(e=>{

    
  res.send(e);
  })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
