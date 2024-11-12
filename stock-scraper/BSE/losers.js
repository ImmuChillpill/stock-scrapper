const puppeteer = require('puppeteer');

async function scrapeStockData() {
  // Step 1: Launch the browser
  const browser = await puppeteer.launch({ headless: false });  // Set headless: true to run without opening a browser window
  const page = await browser.newPage();

  // Step 2: Go to the target URL
  await page.goto('https://www.bseindia.com/markets/equity/EQReports/mktwatchR.html?filter=loser*all$all$');

  // Step 3: Fill in the form fields
  await page.select('select#form-control.ng-pristine.ng-valid.ng-not-empty.ng-touched', 'AllMkt');  // Adjust the selector based on the form element ID or class
  await page.select('select#form-control.ng-pristine.ng-untouched.ng-valid.ng-not-empty','all');
  // Step 4: Submit the form
  await page.click('button#btn.btn-default');  // Adjust this to target the form's submit button
  
  // Wait for the results to load (you may need to adjust the selector or use waitForTimeout)
  await page.waitForSelector('table.col-lg-12.largetable');

  // Step 5: Scrape the table data
  const stockData = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll('table.col-lg-12.largetable tbody tr'));  // Adjust selector as needed
    return rows.map(row => {
      const columns = row.querySelectorAll('td');
      return {
        companyName: columns[0]?.innerText.trim(),
        stockPrice: columns[1]?.innerText.trim(),
        volume: columns[2]?.innerText.trim(),
      };
    });
  });

  console.log(stockData);

  // Step 6: Close the browser
  await browser.close();
}

scrapeStockData().catch(console.error);