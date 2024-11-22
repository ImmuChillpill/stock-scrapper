const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://www.nseindia.com/api/live-analysis-variations?index=gainers',
  headers: { 
    'accept': '*/*', 
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,ta;q=0.7', 
    'cookie': '_ga=GA1.1.1588830705.1730877301; nsit=GoMHZJQz5lwK0-33Oe4KSH3r; AKA_A2=A; defaultLang=en; _abck=57EBBE7F4E05475567D3D567CBA60E96~0~YAAQtozQFykQBS+TAQAAq7BtNgwkR47psytsPM3urho/YRBDMEVFk1LJ+6cQhsitrgSjRYArnQoTbepuES128YPV6/KTeN0EhVXNto/PG/Yjjixw5iCNb5cgoDQ12LUv0JgjpMHkgv5NmZqbMrREfY9+elubgj0llUx+fpPGHKJJthms1QjUFoKOtCKjmYZZ6XJ5c5957XlwpJiCMPPnNYZJc3iIqvwDGApCP3z805EWNL+Dkv4herbGjr6P1s6yGhPHbWVPQsp+r5XPNosFa7lJKo322KI/Cp5SsnjEZ+H6J+uMSyPtETlfxILuU55+6Rwos/2PlJFr73Dnnf+h7WoEdAEjEwKYEpycIcV9mzQ5TO75Oh1qhaX8N52uv+nuZoqSPaHlFA6jaV3tu0sjBZrwwNoeYKWnjpwF3uK3tVKHbGrki0WaZ5XBEYLhEIqrri9LKEU2WDPHIHGL+3Kbv2fcIDjipjpe+4FfnCg8ZZFTDw==~-1~-1~-1; ak_bmsc=A0168BF72FEAB94736A7A408DD366F50~000000000000000000000000000000~YAAQtozQF1AQBS+TAQAA3bZtNhnyMXK8laUByODRwfvsQQH6WrMbog4UEnObfdfUcmsc32sFhhPlC9WqyD08wBdk493AjdYet3lvnSUAJzkp5zdQUjGmMoqxTw5DAMyyKdcSkQmhvbikE9iOUEFta9izzne13/F/WGplPXNAZSTyyC7m9y/v3OenSZBjGXm3vIYcuCYejGCJv7Vq7xp8/tKonqHr2lPThG52zRL7ydq7T4ObZVYQ6G+t+aTQd0/Sc4LndEeo9j8W8nVwNeH/5QAzwdEv0PN+HvEl3TzNBYouezeX4wQHL9I6qMeu8Vl9pDFSc/xFLf9L2Cjr6XRfO/kisSJ+YPVk8WlOYL+IosBNUdh4Q1hDURz1p7jVP4S+QDkdi1pkqUKIfXKID4dACg2ExIKhFySuBiEO8BnOMzfwpDoZzGgMPPt1J+u8jWP7z1B9eQn06kLApIQDLfGt5Q==; nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTczMTc4NTAyMSwiZXhwIjoxNzMxNzkyMjIxfQ.f1Fz16YvYALRcsoU2dIFq8QBIXKFNI2DXnFRB-B9W8w; bm_sz=4FE7A43BD1A832E4B8E912D8DCD4A621~YAAQtozQF8YRBS+TAQAAFVluNhkQiJkW8RZZa5sHEm4svKn91opQSMLie+3bNhXz3ycHbMvri/68/f7/ec2/rSQkn62hvjYlTh6UwX6Vqy9S7NQk2g75vZB/rMahmxAw5QMTuLc4GGEWfH2KFvHOEM7HVS0UugycTCsKLq2YD0SzgiVD8jBin5saUL6yklONFv/d7BbgewWS1OFkjthtnXn03J0TqFbWno4fayXOklVmbliPd0dNdVUyVGrzulHSeTc+FvSg2FmuaOHX622LrMN4rtv/s2/q1b0XA1DjncSpid7u8KvYMTOLjljHsoZEVqxNV8OUhTrfUVG86pvuo8unqtr+s7K1j4gYyZmjqsXUiqR1IPZ7RcePrHvY/nZf24cgz8pVFelST/A+Sm8ElfptFmRR+RqO9Kd/~3684152~3618629; _ga_87M7PJ3R97=GS1.1.1731784985.14.1.1731785029.16.0.0; _ga_WM2NSQKJEK=GS1.1.1731784985.14.1.1731785029.0.0.0; RT="z=1&dm=nseindia.com&si=e526dc8a-e83c-480f-8884-2cc1c89bdd37&ss=m3kk2cxj&sl=2&se=8c&tt=4b5&bcn=%2F%2F684d0d47.akstat.io%2F"; bm_sv=61EF425DA6F83E90DA91CDF4E8A710BB~YAAQtozQF80RBS+TAQAAAl1uNhnM/XeqqRSBwVlWBgT5zeNcTB8D2u9snqBfMN5MAp234gnd792lqtEx7AUL3LaEL1XHjnY9DyTb9B6stmVPc66e+BnuQRFTRx+PqfxDVM5792i5ujwOrh8HaM0njF9H35hJhjVr9yJUmMcEqFH3Qr0yOH8m2CtchD+hI0i5h+Fuy/+SQ1xHSbpJ+sZ81ZtjwUnP1qsMI4p6usEy79uNU2pxGgEAYh1OvW93GnxDOfTC~1; _abck=57EBBE7F4E05475567D3D567CBA60E96~-1~YAAQrIzQF4snxy2TAQAA8M5vNgzDHS10FFV88MpihvPM3uIwvjyUWWnBz3a4YqsrvLq02pXcI9gvYm3MguIJrJ265XExFmVbby+0d8BwwmaVIj+075UupdmC+paPULboCCpVeX1iVrRD9vec3eoyjJYHzDbtVohoUqwLXc7g4rzBgeTu9HD6JIKdxzEzIi9FFSkFZW4Atathtl1Maa571uMi2Kd+kWCLI7ONq70xrhwicqX6YCj/36k3blg7+wUiAJ14GRvp+OOlPiPaNlpIjfUp9yf75fb3S0zSBPSjs/Y7ILrUZtMdv/OC1pUvp3UIp6UyKq2cy8GRiL/fBYXbPWNNU59ROZQrEIU8FPiq9JdNNTP0/L/9Z8hISScrjsctnQNrqq7MT666Q6mADjciHP1zEgsv39bTFMH/AEihimWA0+xoQThYJXZO2/SG4NGjzukuDjDwvYEYmEi9bnO+juzj5N1HNxtqcvluV1R9RTWGLA==~0~-1~-1; bm_sv=61EF425DA6F83E90DA91CDF4E8A710BB~YAAQrIzQF4wnxy2TAQAA8M5vNhlGuxWROBT0nwD3qmlTPlVTQHCzIJysKaYFQCa/d3RVohLi/YyKYflfZfo/PrHnIazU2suVawanSgGMnTRADJ8jDVQ/Gt3dHMUdWh0yhyUQE/rlDP+CVm9VWvl/R2Bes5Ertq3g9zfAej8GLdxiJw0/Q89Z5nNJE+Twgt6/vj4J3UmZlwBloXPlOP3nWg9BCJ3buELX+PPrviXbNThWoEKjLZJi/qd1R6H45OihqivT~1', 
    'priority': 'u=1, i', 
    'referer': 'https://www.nseindia.com/market-data/top-gainers-losers', 
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
