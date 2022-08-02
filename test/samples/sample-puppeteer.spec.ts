import puppeteer, {Browser} from 'puppeteer';

describe('@sample @web Puppeteer', function() {
  let browser: Browser;
  let page: puppeteer.Page;

  it('init browser', async function() {
    browser = await puppeteer.launch(
      process.env.GITHUB_ACTIONS ?
      {
        headless: true,
        executablePath: '/usr/bin/chromium-browser',
        args: [
          '--no-sandbox',
          '--disable-gpu',
        ],
      }:
      {},
    );
  });
  it('create browser page', async function() {
    page = await browser.newPage();
  });
  it('navigate to url', async function() {
    await page.goto('https://example.com');
  });
  it('take page screenshot', async function() {
    await page.screenshot({
      path: 'test-resources/screenshots/sample-puppeteer/example.png',
    });
  });
  it('save page as pdf', async function() {
    // eslint-disable-next-line no-invalid-this
    this.retries(4);
    await page.goto('https://news.ycombinator.com', {
      waitUntil: 'networkidle2',
    });
    await page.pdf({
      path: 'test-resources/documents/sample-puppeteer/example.pdf',
      format: 'a4',
    });
  }).timeout(5000);
  it('close browser', async function() {
    await browser.close();
  });
});
