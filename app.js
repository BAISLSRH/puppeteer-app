const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
  executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium', // Adjust the fallback path as needed
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

  const page = await browser.newPage();
  await page.goto('https://example.com');
  console.log('Website title:', await page.title());
  await browser.close();
})();
