const express = require("express");
//const { Tag, Explore } = require("./scrapeLogic");
const jsdom = require("jsdom");
const cors = require("cors");

const { JSDOM } = jsdom;
const app = express();
app.use(cors())
const PORT = process.env.PORT || 4000;
app.get('/category',(req,res) =>{
 fetch("https://www.aliexpress.com/p/calp-plus/index.html?osf=category_navigate_newTab2&queryFrom=kingKong&categoryTab=babies_%26_kids")
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
 res.json([{"explore":arr}])
  })
});
app.get("/Tag", (req, res) => {

 fetch("https://www.aliexpress.com/w/wholesale-Recommend.html?osf=history&spm=a2g0n.category.header.0")
  .then(response => response.text())
  .then(html => {
  //    let arr = [];
   const dom = new JSDOM(html);
const document = dom.window.document;
   const title = Array.from(document.querySelectorAll("._2Eqko")).map(f=> f.textContent)
  res.json([title])
  })
});

app.get("/Explore", (req, res) => {

 fetch(req.query.url)
  .then(response => response.text())
  .then(html => {
     let arr = [];
   const dom = new JSDOM(html);
const document = dom.window.document;

const e = document.querySelectorAll("#card-list")[0]
  
   const title = Array.from(e.querySelectorAll(".multi--titleText--nXeOvyr")).map(f=> f.textContent)
      const img = Array.from(e.querySelectorAll("div.images--imageWindow--1Z-J9gn")).map(f=> f.querySelectorAll(".images--item--3XZa6xf")[0].src);
      const price = Array.from(e.querySelectorAll(".multi--price-sale--U-S0jtj")).map(f=> f.textContent)
      // const owner = e.querySelector(".cards--storeLink--XkKUQFS")
     const link = Array.from(e.querySelectorAll(".multi--container--1UZxxHY")).map(f=> f.href)
 
  for(let i = 0; i < title.length; i++){
arr.push({title: title[i],img: img[i],price: price[i],link: link[i]})
     }

   
   res.json([{"products":arr}])
      
  });
   });
app.get("/search", (req, res) => {

 fetch(`https://www.aliexpress.com/wholesale?SearchText=${req.query.query}`)
  .then(response => response.text())
  .then(html => {
  /*   let arr = [];
   const dom = new JSDOM(html);
const document = dom.window.document;

const e = document.querySelectorAll("#card-list")[0]
  
   const title = Array.from(e.querySelectorAll(".multi--titleText--nXeOvyr")).map(f=> f.textContent)
      const img = Array.from(e.querySelectorAll("div.images--imageWindow--1Z-J9gn")).map(f=> f.querySelectorAll(".images--item--3XZa6xf")[0].src);
      const price = Array.from(e.querySelectorAll(".multi--price-sale--U-S0jtj")).map(f=> f.textContent)
      // const owner = e.querySelector(".cards--storeLink--XkKUQFS")
     const link = Array.from(e.querySelectorAll(".multi--container--1UZxxHY")).map(f=> f.href)
 
  for(let i = 0; i < title.length; i++){
arr.push({title: title[i],img: img[i],price: price[i],link: link[i]})
     }*/

   
   //res.json([{"products":arr}])
      res.send(html);
  });
   });
   
    
                 
app.get("/", (req, res) => {
  fetch("https://www.aliexpress.com/wholesale?SearchText=Top Selling Products")
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
  // res.json([{"explore":arr}])
   
  fetch("https://www.aliexpress.com/all-wholesale-products.html").then(red=> red.text())
    .then(ht=>{
const doms = new JSDOM(ht);
const documents = doms.window.document;

    const cat = Array.from(documents.querySelectorAll(".anchor1")).map(f=> f.textContent.trim())
    const sub = Array.from(documents.querySelectorAll("a")).map(f=> {
     if(f.parentNode.classList.contains("anchor1")){
        return {text:f.parentNode.textContent.trim(),href: f.href}
 
     }
        }).filter(e=>{
        if(e !== null){
     return e;
                }
      });
let arr1 = [];
     for(let i = 0; i < cat.length; i++){
arr1.push({text: cat[i],href: sub[i]})
                               } 
     
     /*  {
     return Array.from(f.querySelectorAll("li > a")).map(d=>
      ({subtitle:d.textContent,link:d.href})
      )
    })
    let arr2 = [];
 for(let i = 0, t = 0;  i < cat.length, t < sub.length;  i++,t++){
//arr.push({title: title[i],img: img[i],price: price[i],link: link[i]})
let category = Object.assign(cat[i],{sub:sub[t]})                 
 arr2.push(category)
 
 } */
   res.json([{"explore":arr},{"category":sub}])
                  });
      
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
