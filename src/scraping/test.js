const puppeteer = require('puppeteer');

const extractReview = string => string;

const scrape = async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    // devtools: true,
  });
  const page = await browser.newPage();
  await page.goto('https://www.google.com/search?q=yankee+stadium+reviews');
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    // str example: Rating: 4 - ‎1,168 reviews
    // str.split(' ') example: ["Rating:", "4", "-", "‎1,168", "reviews"]
    const deconstructReview = (string) => {
      const stringArr = string.split(' ');
      return {
        reviewScore: stringArr[1],
        numberOfReviews: stringArr[3],
      };
    };
    const links = [...document.querySelectorAll('a')]
      .map(link => link.href)
      // Filter out only the links that are yelp or tripadvisor
      .filter(link => link.indexOf('www.yelp') !== -1 || link.indexOf('www.tripadvisor') !== -1)
      // Filter out any cached links
      .filter(linkUrl => linkUrl.match(/^(http|https):\/\/www.(yelp|tripadvisor)/))
      // Create object where yelp and tripadvisor are keys on object
      .reduce((acc, curr) => {
        if (curr.indexOf('yelp') !== -1) {
          return {
            ...acc,
            yelp: curr,
          };
        }

        return {
          ...acc,
          tripadvisor: curr,
        };
      }, {});


    const elements = [...document.querySelectorAll('g-review-stars')];
    const childNodes = elements.map((element) => {
      const { parentElement } = element;
      const mockBusinessUrl = parentElement.previousSibling ? parentElement.previousSibling.innerText : '';
      const reviewObject = deconstructReview(parentElement.innerText);

      if (mockBusinessUrl.indexOf('yelp') !== -1) {
        return {
          businessName: 'yelp',
          businessUrl: links.yelp,
          ...reviewObject,
        };
      }

      if (mockBusinessUrl.indexOf('tripadvisor') !== -1) {
        return {
          businessName: 'tripadvisor',
          businessUrl: links.tripadvisor,
          review: parentElement.innerText,
        };
      }

      return null;
    })
      .filter(business => business);


    return { childNodes };
  });

  browser.close();
  return result;
};

scrape().then((val) => {
  console.log('val', val);
});

async function getPic() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.google.com/search?q=output+reviews');
  await page.screenshot({ path: 'src/scraping/google.png' });

  await browser.close();
}

// get all text of reviews but don't know what belongs to what
// [...document.querySelectorAll('g-review-stars > span')].map(element => element.attributes[1].nodeValue);
