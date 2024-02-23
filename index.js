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
   //  function Len(l){
const e = document.querySelectorAll("#card-list")[0]
  
   const title = Array.from(e.querySelectorAll(".multi--titleText--nXeOvyr")).map(f=> f.textContent)
      const img = Array.from(e.querySelectorAll("div.images--imageWindow--1Z-J9gn")).map(f=> f.querySelectorAll(".images--item--3XZa6xf")[0].src);
      const price = Array.from(e.querySelectorAll(".multi--price-sale--U-S0jtj")).map(f=> f.textContent)
      // const owner = e.querySelector(".cards--storeLink--XkKUQFS")
     const link = Array.from(e.querySelectorAll(".multi--container--1UZxxHY")).map(f=> f.href)
       
      

     
 
  for(let i = 0; i < title.length; i++){
arr.push({title: title[i],img: img[i],price: price[i],link: link[i]})
                             }
   //   }
 //  Len(0)
 //  Len(1)
   res.json(arr)
   //  },2000); 
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
