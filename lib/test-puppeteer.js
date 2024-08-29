const puppeteer = require('puppeteer');

async function testPuppeteer() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://github.com/');
  const screenshot = await page.screenshot({ path: 'example.png' });

  await browser.close();
  console.log('Screenshot taken and saved as example.png');
}

testPuppeteer().catch(console.error);
