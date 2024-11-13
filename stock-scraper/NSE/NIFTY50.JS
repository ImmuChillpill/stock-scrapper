const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%2050',
  headers: { 
    'accept': '*/*', 
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,ta;q=0.7', 
    'cookie': '_ga=GA1.1.1588830705.1730877301; nseQuoteSymbols=[{"symbol":"DEEDEV","identifier":null,"type":"equity"}]; defaultLang=en; bm_sz=758305D830EA0BEFA1F4E8C52561D1C5~YAAQXIMsMf+xbAaTAQAAy8dvIRmWlOK5lMqRtvEz+0UH5KxwRU3TrsbXRVgTL9Ok6NGeqtXSITpGohuooxBUhOe3rGq3ZgFyAWr/e3AyDNoq9zVDI+fMByGb5Pg+TKolVG7q29TkpdA+MmNFbz7CIWa7caeeUAEqXFrZwAZeU+ilvO2q9iHovSc5p9AJ3dSDxOo4MtfvCfE1gBmo8U7PQe7kUBrWwg+IgpYYH8HMXhEwlC8XZXYCBzogaPlCOU+6efKwYCLKxVSa12DT1gPD1K2P4qkSNtC+BZovNkpy9ThUCKZYSf9L6ZPpfu3fzCOV7InR7rlRwsmwZ2E1W4l2jBk49/PyMpq2Q1uiJ8n6VJx3cU0/5A1zYytLaFwQg54sdxPtkJBPT4zZFzHLUj+icEIJSnFIIW1v8eJaHylJIqZ40bRGQYJH2Xcl4arPXY9nBq2nwdOmtRPBK53/RtNTUJaLNBqtWcYMoZzOXS9KCnDAxk/4c8Kh~3422515~4403782; nsit=8myxgGxg60oAEXFQ8ZNS7PrI; AKA_A2=A; ak_bmsc=BF492DEDFA79312CB5C6999083E7C820~000000000000000000000000000000~YAAQvY9lX2U32xyTAQAAbvvrIRkT/MzkGupkcHJuaDxGVLvBZT8+gcDQJ+RAW0VAknVAp8+Z3l2kvGFILuOGkpu+NJDVZ17xW2iiIlxrDEA3BdDPSCCm0Thixzpf+Eyr+omzVqy9UYCUPGkUzl3NbwJ3JAjBKAekKs6ieyADEAHNXaFsd50BddFUP1K90FeXNWee8PAVFt/wHJ2jNCe7RYyFHhNylHAcFVzTvqO2JzUjD42Yi+r/P2oC4UWiB3tO/++nU6W9qmbK2xrmdEHiXtGpLdg+eT9NEkdn7TKVgFq24IzfAq5JKamybBlIVoHsZCtz8cIYRW9phjWRue2hOdI92Wj1FFZoS+yyZ9Jkemo0ae6kXzc3E+xAKB6DnHKzf7GSRy51TyF1I6s37NBamWVCwc/3vr7P5BKISIvSuUPUPLKhL5C+811aTBcDbzhzQl7VdO1s75Q25SjwVk3j4w==; nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTczMTQ0MjExMywiZXhwIjoxNzMxNDQ5MzEzfQ.R6BhC-6f_U2IPrtytaIXq32tgPX6YRzyYwhtXSnP-CM; RT="z=1&dm=nseindia.com&si=e526dc8a-e83c-480f-8884-2cc1c89bdd37&ss=m3ev85wt&sl=c&se=8c&tt=1it8&bcn=%2F%2F684dd32a.akstat.io%2F"; _ga_87M7PJ3R97=GS1.1.1731440941.11.1.1731442121.33.0.0; _ga_WM2NSQKJEK=GS1.1.1731440941.11.1.1731442121.0.0.0; _abck=57EBBE7F4E05475567D3D567CBA60E96~0~YAAQvY9lX6eE2xyTAQAAlgr+IQy0uOpgxB1ODm8QjIctFccDpmfYugpM385D5iwsDT/pLeyMc7jZOCVqjyqNv1fHdLJW77LOvVQ4K7fejiP1v6ND5RheQMbRZ634OxsWdwlEzdgMXk6fGYwHF8n73odlWpx8zkX4rd0tYgSk4LLIfJgHzfqWFT+2N9fLljmQW5E9oXoS/GE61Qw9rwjjEtN7gvY/hxR963g5gNt5Igz6dxIQOw67hyoOiDmsow2tSn+vplF1eHpC4ZVoIJCDc0hnYJfW1R0jpxSLIezeVaAaagYMCqrXoimRQ3lnzjumPyvpqHUHbZc4Ya9TU80MehX18KQzUFaUlwAn6PshG6d6n4C/ZBXWcuAsQsV6Ix8dGgTihC1LXWGb44c5clI3mDAmwBzc6KwT/2J/Uw2fHK565aO7Zq6I/dJXx+qSOPt+Wg9Uvbeblo4=~-1~-1~-1; bm_sv=46B70ACF57B53F7999D6EBD310B396EC~YAAQvY9lX6iE2xyTAQAAlgr+IRlH4kE7bjWjoMpjcuWFqvXvCUD555tjLTqVItWGkrht25dJJ9+zQqYJtBy0fkkf7wMTkxVqTaTxaL7L1rHiGSuF89xn/UVcmXCob4Kyh2rVCqkJtKVCucC8TnFJLUJ8QjfOY9xc4ZWxVYLlDbvQYQ5i1r2Ivjd0nladrKF5PdMaLm4S8WHRZEZ2HpTB2CWLeSTLHpxACCjHVLR9VZd+oD5QTkBuc4NG3HbPi1h6TcEWUw==~1; _abck=57EBBE7F4E05475567D3D567CBA60E96~-1~YAAQrIzQFy3JQgiTAQAAtE//IQxK9G4jX6j6bFIVeDcND2Xr3SF1X49x5xYMhxHXu3vrm0YQc881XpOyfev/3Uxq+1W8LuqcM7T2xTCXIFHjIfQV4FGWT6jJVJ+19s1SmnjyZi6E0CTL5+iJntUHzgmlWRSJ7xgtX/JJFihUb4cRMzU+/FXSKzUpn8I0tUGSsRNUwCo+aK8vloh3JRTujqInhMwz8lPF+PfrDcAEic4slP8DaF92HoG9F0IqXOyTrAhskASp5G3i3iwlehevNc1MiYWzX0B8GNK7fdN87w59GQkfbR3B13HPI7+NWhAte/1OryoGl/m2IY4Da5bSgp2PK2xfih07k14q0srRWdQIo71KJV2f8YiKhIyQyXZ2sa0SyGFGb6sE1Pa1u0keBabHL14uKA1NvvZsmYPhstAxWvDI+BdOzfrqDthlHcA3LRodiLU5Bwo=~0~-1~-1; bm_sv=46B70ACF57B53F7999D6EBD310B396EC~YAAQrIzQFy7JQgiTAQAAtE//IRngt2cS6ntLlq/jrJJlhd51dpWVRsDmOlk4QV8V6XVjK0PziEv1H4RfoKBTgtJA5THkO+3DCOyx1oNEhhOTNW8S4GoAYTD05CijJAn2bw/TMY7grTnaQF5bUXCymAn4gJSMr0nI7bN9D3rbQMPpB5VWU0wxgUds/KYrmY8T9HOqbulfKCeNI1Tdybeatg2mmMjJ3qHcwHX5RTz2aeLY4T6risj6DHgEbgKgvtna1F0EmA==~1', 
    'priority': 'u=1, i', 
    'referer': 'https://www.nseindia.com/market-data/live-equity-market?symbol=NIFTY%2050', 
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

