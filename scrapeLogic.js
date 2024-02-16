const puppeteer = require("puppeteer-extra");

const StealthPlugin = require('puppeteer-extra-plugin-stealth')

puppeteer.use(StealthPlugin())
const { executablePath } = require("puppeteer");

require("dotenv").config();

const scrapeLogic = async (res) => {
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
        : executablePath(),
  });
  try {
    const page = await browser.newPage();

    await page.goto("https://www.aliexpress.com/");

    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 });

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

const imageUrls = await page.$$eval('img', images => images.map(img => img.src));
    
    res.send(imageUrls);
  } catch (e) {
    console.error(e);
    res.send(`Something went wrong while running Puppeteer: ${e}`);
  } finally {
    await browser.close();
  }
};

module.exports = { scrapeLogic };
