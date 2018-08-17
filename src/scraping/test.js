const puppeteer = require('puppeteer');

async function getPic() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.google.com/search?q=output+reviews');
  await page.screenshot({ path: 'src/scraping/google.png' });

  await browser.close();
}

const extractReview = string => string;

const scrape = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.google.com/search?q=output+reviews');

  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    function extractBusiness(string) {
      const stringArray = string.match(/www.(.*).com/);
      return stringArray[1];
    }
    // const reviews = document.getElementsByTagName('g-review-stars');
    // console.log('reviews', reviews);
    // return reviews;
    const review = document.getElementsByTagName('g-review-stars')[0];
    const reviewString = review.nextSibling;
    const urlString = extractBusiness(review.parentElement.previousSibling.innerText);

    return {
      reviewString,
      urlString,
    };
  });

  browser.close();
  return result;
};

scrape().then((val) => {
  console.log('val', val);
});
