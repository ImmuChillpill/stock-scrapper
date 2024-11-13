const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.bseindia.com/BseIndiaAPI/api/MktHighLowDataNew/w?EQflag=1&Grpcode=&HLflag=L&indexcode=&scripcode=',
  headers: { 
    'accept': 'application/json, text/plain, */*', 
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,ta;q=0.7', 
    'origin': 'https://www.bseindia.com', 
    'priority': 'u=1, i', 
    'referer': 'https://www.bseindia.com/', 
    'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"Windows"', 
    'sec-fetch-dest': 'empty', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-site': 'same-site', 
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
