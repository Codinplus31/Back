const express = require("express");
//const { Tag, Explore } = require("./scrapeLogic");
const jsdom = require("jsdom");
const cors = require("cors");
const { JSDOM } = jsdom;
const app = express();
app.use(cors())
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
  // res.json([{"explore":arr}])
   
  fetch("https://www.aliexpress.com/all-wholesale-products.html").then(red=> red.text())
    .then(ht=>{
const doms = new JSDOM(ht);
const documents = doms.window.document;

    const cat = Array.from(documents.querySelectorAll(".anchor1")).map(f=> f.textContent.trim())
    const sub = Array.from(documents.querySelectorAll("a")).map(f=> {
     if(f.parentNode.classList.contains("anchor-wrap")){
        return {class:f.parentNode.textContent,href: f.href}
 
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
