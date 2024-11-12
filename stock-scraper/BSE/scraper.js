// Import Puppeteer library
const puppeteer = require('puppeteer');

// Function to scrape stock data
async function scrapeStockData() {
  // Launch browser instance
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    // Navigate to the BSE webpage with specific options
    await page.goto('https://www.bseindia.com/corporates/List_Scrips.html', { waitUntil: 'networkidle2', timeout: 60000 });

    // Set segment and status filters
    await page.select('select#ddlsegment', 'Equity');
    await page.select('select#ddlstatus', 'Active');

    // Click submit and wait for navigation to complete
    await Promise.all([
      page.click('#btnSubmit'),
      page.waitForNavigation({ waitUntil: 'networkidle2' }),
    ]);

    // Wait additional time to ensure content loads
    await page.waitForTimeout(5000);

    // Check if rows in table are present
    const rows = await page.$$('table.mGrid tbody tr');
    console.log(`Number of rows found: ${rows.length}`);

    // Extract data if rows are available
    if (rows.length > 0) {
      const stockData = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('table.mGrid tbody tr')).map(row => {
          const columns = row.querySelectorAll('td');
          return {
            companyName: columns[0]?.innerText.trim() || 'N/A',
            stockPrice: columns[1]?.innerText.trim() || 'N/A',
            volume: columns[2]?.innerText.trim() || 'N/A',
          };
        });
      });

      // Log the extracted stock data in a readable format
      console.table(stockData); // Display data in table format for better readability
    } else {
      console.log("No data rows found. The selector might be incorrect or data hasn't loaded yet.");
    }

  } catch (error) {
    console.error("Error during scraping:", error);
  } finally {
    // Ensure the browser is closed even if an error occurs
    await browser.close();
  }
}

// Start the scrapeStockData function
scrapeStockData().catch(console.error);
