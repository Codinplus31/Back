const express = require("express");
//const { Tag, Explore } = require("./scrapeLogic");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/Tag", (req, res) => {
 // Tag(res);
});

app.get("/Explore", (req, res) => {
  //Explore(res);
});
    
                 
app.get("/", (req, res) => {
  fetch("https://www.aliexpress.com/w/wholesale-Recommend.html?osf=history&spm=a2g0n.category.header.0")
  .then(response => response.text())
  .then(html => {
      let arr = [];
   const dom = new JSDOM(html);
const document = dom.window.document;
   
    const element = document.querySelectorAll(".multi--outWrapper--SeJ8lrF")
      .forEach(e=>{
       const title = e.querySelector(".multi--titleText--nXeOvyr")
      const img = e.querySelector(".images--item--3XZa6xf")
      const price = e.querySelector(".multi--price-sale--U-S0jtj")
       const owner = e.querySelector(".cards--storeLink--XkKUQFS")
     const link = e.querySelector("a")
     
      
      arr.push({title: title.innerText,img: img.src,price: price.textContext,owner:owner.innerText,link:link.href})
       // arr.push(e.innerText)
      });
res.send(arr)
    // Do something with the selected element
    
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
