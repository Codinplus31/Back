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
   const title = document.querySelectorAll(".multi--titleText--nXeOvyr")
      const img = document.querySelectorAll(".images--item--3XZa6xf")
      const price = document.querySelectorAll(".multi--price-sale--U-S0jtj")
       const owner = document.querySelectorAll(".cards--storeLink--XkKUQFS")
     const link = document.querySelectorAll("a")
     
  const element = document.querySelectorAll("#card-list")
     /* .forEach(e=>{
       
      
    //  arr.push({title: title.innerText,img: img.src,price: price.textContext,owner:owner.innerText,link:link.href})
    //   arr.push(e.textContent)
      });*/
//res.send([element.length, title.length,img.length,price.length, owner.length, link.length])
    // Do something with the selected element
  //  setTimeout(()=>{
     console.log(html);
   res.send(title.length);
  //  },2000);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
