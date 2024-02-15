const express = require('express');
const puppeteer = require('puppeteer-core');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://watchoutoutmovies.vercel.app');
  
  const title = await page.title();
  
  res.send(`Title of the page: ${title}`);
  
  await browser.close();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 