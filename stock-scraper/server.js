const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Function for scraping the List of Scrip Data
async function fetchScripData(segment, status) {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.bseindia.com/BseIndiaAPI/api/ListofScripData/w?Group=&Scripcode=&industry=&segment=${segment}&status=${status}`,
    headers: {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,ta;q=0.7',
      'origin': 'https://www.bseindia.com',
      'referer': 'https://www.bseindia.com/',
      'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
    }
  };

  try {
    const response = await axios.request(config);
    console.log("Scrip Data Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching Scrip Data:", error.response ? error.response.data : error.message);
    throw error;
  }
}

// Function for scraping Gainers data
async function fetchGainersData() {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserDataeqto/w?GLtype=gainer&IndxGrp=AllMkt&IndxGrpval=AllMkt&orderby=all',
    headers: {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,ta;q=0.7',
      'origin': 'https://www.bseindia.com',
      'referer': 'https://www.bseindia.com/',
      'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
    }
  };

  try {
    const response = await axios.request(config);
    console.log("Gainers Data Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching Gainers Data:", error.response ? error.response.data : error.message);
    throw error;
  }
}

// Function for scraping Losers data
async function fetchLosersData() {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserDataeqto/w?GLtype=loser&IndxGrp=AllMkt&IndxGrpval=AllMkt&orderby=all',
    headers: {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,ta;q=0.7',
      'origin': 'https://www.bseindia.com',
      'referer': 'https://www.bseindia.com/',
      'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
    }
  };

  try {
    const response = await axios.request(config);
    console.log("Losers Data Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching Losers Data:", error.response ? error.response.data : error.message);
    throw error;
  }
}

// Function for scraping 52-week High data
async function fetch52WeekHighData() {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.bseindia.com/BseIndiaAPI/api/MktHighLowDataNew/w?EQflag=1&Grpcode=&HLflag=H&indexcode=&scripcode=',
    headers: {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,ta;q=0.7',
      'origin': 'https://www.bseindia.com',
      'referer': 'https://www.bseindia.com/',
      'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
    }
  };

  try {
    const response = await axios.request(config);
    console.log("52-Week High Data Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching 52-week High Data:", error.response ? error.response.data : error.message);
    throw error;
  }
}

// Function for scraping 52-week Low data
async function fetch52WeekLowData() {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.bseindia.com/BseIndiaAPI/api/MktHighLowDataNew/w?EQflag=1&Grpcode=&HLflag=L&indexcode=&scripcode=',
    headers: {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,ta;q=0.7',
      'origin': 'https://www.bseindia.com',
      'referer': 'https://www.bseindia.com/',
      'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
    }
  };

  try {
    const response = await axios.request(config);
    console.log("52-Week Low Data Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching 52-week Low Data:", error.response ? error.response.data : error.message);
    throw error;
  }
}

// Routes
app.get('/api/scripdata', async (req, res) => {
  const { segment, status } = req.query;
  try {
    const data = await fetchScripData(segment, status);
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching Scrip Data");
  }
});

app.get('/api/gainers', async (req, res) => {
  try {
    const data = await fetchGainersData();
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching Gainers Data");
  }
});

app.get('/api/losers', async (req, res) => {
  try {
    const data = await fetchLosersData();
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching Losers Data");
  }
});

app.get('/api/52weeks/high', async (req, res) => {
  try {
    const data = await fetch52WeekHighData();
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching 52-week High Data");
  }
});

app.get('/api/52weeks/low', async (req, res) => {
  try {
    const data = await fetch52WeekLowData();
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching 52-week Low Data");
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
