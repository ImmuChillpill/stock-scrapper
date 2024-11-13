const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://www.nseindia.com/api/live-analysis-emerge',
  headers: { 
    'accept': '*/*', 
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,ta;q=0.7', 
    'cookie': '_ga=GA1.1.1588830705.1730877301; nseQuoteSymbols=[{"symbol":"DEEDEV","identifier":null,"type":"equity"}]; defaultLang=en; bm_sz=758305D830EA0BEFA1F4E8C52561D1C5~YAAQXIMsMf+xbAaTAQAAy8dvIRmWlOK5lMqRtvEz+0UH5KxwRU3TrsbXRVgTL9Ok6NGeqtXSITpGohuooxBUhOe3rGq3ZgFyAWr/e3AyDNoq9zVDI+fMByGb5Pg+TKolVG7q29TkpdA+MmNFbz7CIWa7caeeUAEqXFrZwAZeU+ilvO2q9iHovSc5p9AJ3dSDxOo4MtfvCfE1gBmo8U7PQe7kUBrWwg+IgpYYH8HMXhEwlC8XZXYCBzogaPlCOU+6efKwYCLKxVSa12DT1gPD1K2P4qkSNtC+BZovNkpy9ThUCKZYSf9L6ZPpfu3fzCOV7InR7rlRwsmwZ2E1W4l2jBk49/PyMpq2Q1uiJ8n6VJx3cU0/5A1zYytLaFwQg54sdxPtkJBPT4zZFzHLUj+icEIJSnFIIW1v8eJaHylJIqZ40bRGQYJH2Xcl4arPXY9nBq2nwdOmtRPBK53/RtNTUJaLNBqtWcYMoZzOXS9KCnDAxk/4c8Kh~3422515~4403782; nsit=8myxgGxg60oAEXFQ8ZNS7PrI; AKA_A2=A; ak_bmsc=BF492DEDFA79312CB5C6999083E7C820~000000000000000000000000000000~YAAQvY9lX2U32xyTAQAAbvvrIRkT/MzkGupkcHJuaDxGVLvBZT8+gcDQJ+RAW0VAknVAp8+Z3l2kvGFILuOGkpu+NJDVZ17xW2iiIlxrDEA3BdDPSCCm0Thixzpf+Eyr+omzVqy9UYCUPGkUzl3NbwJ3JAjBKAekKs6ieyADEAHNXaFsd50BddFUP1K90FeXNWee8PAVFt/wHJ2jNCe7RYyFHhNylHAcFVzTvqO2JzUjD42Yi+r/P2oC4UWiB3tO/++nU6W9qmbK2xrmdEHiXtGpLdg+eT9NEkdn7TKVgFq24IzfAq5JKamybBlIVoHsZCtz8cIYRW9phjWRue2hOdI92Wj1FFZoS+yyZ9Jkemo0ae6kXzc3E+xAKB6DnHKzf7GSRy51TyF1I6s37NBamWVCwc/3vr7P5BKISIvSuUPUPLKhL5C+811aTBcDbzhzQl7VdO1s75Q25SjwVk3j4w==; nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTczMTQ0MTk0MywiZXhwIjoxNzMxNDQ5MTQzfQ.qsFSDBbGfj_E-UeogSR3A90nchO2T0q8MoAnA6Oq-OU; _ga_87M7PJ3R97=GS1.1.1731440941.11.1.1731441951.4.0.0; _ga_WM2NSQKJEK=GS1.1.1731440941.11.1.1731441951.0.0.0; RT="z=1&dm=nseindia.com&si=e526dc8a-e83c-480f-8884-2cc1c89bdd37&ss=m3ev85wt&sl=a&se=8c&tt=18qg&bcn=%2F%2F684dd32a.akstat.io%2F"; _abck=57EBBE7F4E05475567D3D567CBA60E96~0~YAAQvY9lX0B82xyTAQAAo3X7IQyZt2Gz/pMtY1qHdnUZyQeNVUFdEsKr9BYomoJrM1dsLCqSdKZEUWuhV7OyNJAvH7taRiuoB004AduSr2rrZTqBAT6HiNI9siNfnz9o2hpNBPFAPTno+77D0AYroIz7CcB3tMQ4TJxryrYlJWkx+GshDiSg/O04FubmfDLvX53eWbpKS9nyfYYf8Q8IMYKXYt+nX2o0lQDRVMNDvaQDKx8p/Y9kvcPLq7uyWhFU9IMQ2G6CBucf4gyLREUhl3R1EuTcuVgjoDoE1zmKzUOf/c1uTSukjyubIcW2TXUh1OTvhkmGbCGBZalyXC6ROz2Q3DPIsOksPg2C5xFQ8Dt1JKx3McjJWQ+L+Rz2vv6WRvp7E08c4jnbKMAnm40111KHoJDTKp4nmz+bMWhF81CsBT8gqVPRepx3LHDYQyOCHmAKoSph3nU=~-1~-1~-1; bm_sv=46B70ACF57B53F7999D6EBD310B396EC~YAAQvY9lX0F82xyTAQAApHX7IRkfnbTJtP3Cmd6y8cAvUkJv4HE5m0rHR4fkbF5f6bmP9x6D44OchlJklRX2f1lvzrVNuxS0qFZBqJxgIBKuzSziWD8LB5AjZ1yQwmzwqEVxUp/bDEm2Gvbi/g1Z/VxvqpnveezvRgHnR4KFTDfpqOuXwdxsBUA2m7d5fUuiyNbUfVkuBe2Jc+k4js77em7YmV0debdFSTLTEtbTSRMFk9Jdg1FjpRVDaTWLEqYKgm7uTg==~1; _abck=57EBBE7F4E05475567D3D567CBA60E96~-1~YAAQrIzQF6bDQgiTAQAAhrr8IQzGYPhnIuRWKxNMi4mwSt2svDxFw0UbNfLm81onrF2sp32csC4d+xyk8iEYXRXYJ0muYJaAOHDq649DN9E/u6+M3r6TTmVRgex6BnFyyhx1Nz74GbaK9eaNA6DmBv1P2ZgFewA2lsmVDJD7jj5b5yQyDyoihnV1TpaQgIPsZfNGr6k9CkzjOw0f7yBRuh5i72fyLsed5jtTqa3fjqBkJU8BVODgGvJ0lzEX0ZOfJqQTP2A6AZDzsh+yTTHeyu5ynwPv+mIqcrBO2zAa3fsUhWb8FdI5soq7TRqzWxBxO+wDsUIYlLWyxDTjEPCv8HNZPtJRyIId6GEZ8uLEM3tqqFUA8285/MVocK/ECY6Z+V4TuCeFu01e32Xgx/2ql9O48XcmCWcdw3DnVNdu9yZd8gQvXzaOLhfL+zLIwwCr/PGMnos3Vs8=~0~-1~-1; bm_sv=46B70ACF57B53F7999D6EBD310B396EC~YAAQrIzQF6fDQgiTAQAAhrr8IRny3L8MswEVGcLJKg/GBpwiLMNYDcEK/pRD5Emr4pzh6Dl1yJhTZs808cnXuprWhb9Oc68ESz+MUt+3+DbHxr+0pyhfnsT0hwwx2VWnoPRcdL2wDwkLT3jLEo/TuG12a7Fn/rFOjyn0apQOHXPqH0M8XyKHTkquwXFazyyLlCebr8EfLTcCk6HWworbbhMTyqDwbbSdhaDxVVRuMCYfJJxJI8kxqqpLSUcStHAW+VsE/w==~1', 
    'priority': 'u=1, i', 
    'referer': 'https://www.nseindia.com/market-data/sme-market', 
    'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"Windows"', 
    'sec-fetch-dest': 'empty', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-site': 'same-origin', 
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
