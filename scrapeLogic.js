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

    await page.goto("https://m.aliexpress.com/category.html?spm=a2g0n.home.header-slider.3.3dc876dbHN4yJB&categoryTab=recommend&browser_id=a37dc6672b1046049dccd0d742a4a070&aff_trace_key=null&aff_platform=msite&m_page_id=kwtwhonnjmcawzzl18db7c0e5f738ef5aaed2be9c6&gclid=");

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

const doc = await page.$$eval('._10_jv', elem => elem.map(e => e.textContent));

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
await page.goto("https://campaign.aliexpress.com/wow/gcp-plus/ae/tupr?spm=a2g0n.home.choice.1.3dc876dbdWs97t&_immersiveMode=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&wh_weex=true&wh_pid=300000557%2FChoiceFirstN&browser_id=a37dc6672b1046049dccd0d742a4a070&aff_trace_key=null&aff_platform=msite&m_page_id=kwtwhonnjmcawzzl18db7c0e5f738ef5aaed2be9c6&gclid=");
  // await page.screenshot({ path: 'screenshot.png' });
      //https://www.aliexpress.com/?spm=a2g0n.category.header.2.6d4bzxXLzxXLUC
  
    // Set screen size
    await page.setViewport({ width: 340, height: 600 });

      const imageUrls = await page.$$eval('img', images => images.map(img => img.src));
    
    res.send(imageUrls);
  } catch (e) {
    console.error(e);
    res.send(`Something went wrong while running Puppeteer: ${e}`);
  } finally {
    await browser.close();
  }
};
     
    //  }


module.exports = {Tag, Explore};
    
