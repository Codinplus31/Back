//const puppeteerExtra = require("puppeteer-extra");

//const StealthPlugin = require('puppeteer-extra-plugin-stealth')

//puppeteer.use(StealthPlugin())
const puppeteer = require("puppeteer");

require("dotenv").config();
//const scrape = async ()=>{
/*const browser = await puppeteer.launch({
    args: [
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",
    ],
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
  });*/
const Tag = async (res) => {
  const browser = await puppeteer.launch({
    args: [
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",
    ],
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
    
  });
  try {
    const page = await browser.newPage();

    await page.goto("https://www.ebay.com/globaldeals?_trkparms=parentrq%3Ac112604d18d0ad992fa3e59affff15d8%7Cpageci%3Af16bdf6f-cf17-11ee-8990-a2eda311502c%7Ciid%3A1%7Cvlpname%3Avlp_homepage");

    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 });
//await page.screenshot({ path: 'screenshot.png' });
  
    // Type into search box
   // await page.type(".search-box__input", "automate beyond recorder");

    // Wait and click on first result
   // const searchResultSelector = ".container";
  //  await page.waitForSelector(searchResultSelector);
    //await page.click(searchResultSelector);

    // Locate the full title with a unique string
    //const textSelector = await page.waitForSelector(
     // "text/Customize and automate"
   // );
    //const fullTitle = await searchResultSelector.evaluate((el) => el.innerHTML);

    // Print the full title
   // const logStatement = ${fullTitle}`;
   // console.log(searchResultSelector);

const doc = await page.$$eval('img', elem => elem.map(e => e.src)); 

    res.send(doc);
  } catch (e) {
    console.error(e);
    res.send(`Something went wrong while running Puppeteer: ${e}`);
  } finally {
    await browser.close();
  }
};
const Explore = async (res) => {
  const browser = await puppeteer.launch({
    args: [
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",
    ],
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
      
  });
  try {
    const page = await browser.newPage();
await page.goto("https://www.aliexpress.com/w/wholesale-recommend.html",{timeout:0});
  // await page.screenshot({ path: 'screenshot.png' });
      //https://www.aliexpress.com/?spm=a2g0n.category.header.2.6d4bzxXLzxXLUC
  
    // Set screen size
    await page.setViewport({ width: 1080, height: 1024});
//page.setDefaultNavigationTimeout(60000);
     // const imageUrls = await page.$$eval('img', images => images.map(img=> img.src));
   let selector = ".main--card-2NMkE1D";
      await page.waitForSelector(selector,{timeout:3000});
const data = await page.evaluate((selector) => {
      const e = document.querySelector(selector);
 let img = e.querySelector(".product-img").src;
let title = e.querySelector(".manhattan--titleText--WccSjUS").textContent;
let saleprice = e.querySelector(".manhattan--price-sale--1CCSZfK").textContent;
let originalprice = e.querySelector(".manhattan--price-original--3QAcCkG").textContent;

      // Your scraping logic goes here
      // You can access and manipulate the element using standard DOM APIs
      // Return the extracted data as an object or array
      return {
        img: img,
        title: title,
        saleprice:saleprice,
        originalprice:originalprice
          
        // Add more properties as needed
      };
    }, selector);
    
    res.send(data);
  } catch (e) {
    console.error(e);
    res.send(`Something went wrong while running Puppeteer: ${e}`);
  } finally {
    await browser.close();
  }
};
     
    //  }


module.exports = {Tag, Explore};
    
