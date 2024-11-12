const puppeteer = require('puppeteer');

async function scrapeNSEData() {
  // Step 1: Launch the browser
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Step 2: Go to the NSE target URL
  await page.goto('https://www.nseindia.com/market-data/pre-open-market-cm-and-emerge-market');  // Replace with the actual NSE URL

  // Step 3: Fill in form fields (use correct IDs/classes)
  await page.select('select#sel-Pre-Open-Market', 'All');  // Replace with NSE's actual field IDs    // Adjust for NSE status field

  // Step 4: Submit the form  
  // Wait for the NSE results to load (adjust the selector as needed)
  await page.waitForSelector('table.livePreTable');  // Replace with NSE's table selector

  // Step 5: Scrape NSE table data
  const nseStockData = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll('table.livePreTable tbody tr'));  // Adjust selector
    return rows.map(row => {
      const columns = row.querySelectorAll('td');
      return {
        companyName: columns[0]?.innerText.trim(),
        stockPrice: columns[1]?.innerText.trim(),
        volume: columns[2]?.innerText.trim(),
      };
    });
  });

  console.log(nseStockData);

  // Step 6: Close the browser
  await browser.close();
}

scrapeNSEData('Reliance Industries').catch(console.error);
