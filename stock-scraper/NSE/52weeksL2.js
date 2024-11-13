const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://www.nseindia.com/api/live-analysis-data-52weeklowstock',
  headers: { 
    'accept': '*/*', 
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,ta;q=0.7', 
    'cookie': '_ga=GA1.1.1588830705.1730877301; nseQuoteSymbols=[{"symbol":"DEEDEV","identifier":null,"type":"equity"}]; defaultLang=en; bm_sz=758305D830EA0BEFA1F4E8C52561D1C5~YAAQXIMsMf+xbAaTAQAAy8dvIRmWlOK5lMqRtvEz+0UH5KxwRU3TrsbXRVgTL9Ok6NGeqtXSITpGohuooxBUhOe3rGq3ZgFyAWr/e3AyDNoq9zVDI+fMByGb5Pg+TKolVG7q29TkpdA+MmNFbz7CIWa7caeeUAEqXFrZwAZeU+ilvO2q9iHovSc5p9AJ3dSDxOo4MtfvCfE1gBmo8U7PQe7kUBrWwg+IgpYYH8HMXhEwlC8XZXYCBzogaPlCOU+6efKwYCLKxVSa12DT1gPD1K2P4qkSNtC+BZovNkpy9ThUCKZYSf9L6ZPpfu3fzCOV7InR7rlRwsmwZ2E1W4l2jBk49/PyMpq2Q1uiJ8n6VJx3cU0/5A1zYytLaFwQg54sdxPtkJBPT4zZFzHLUj+icEIJSnFIIW1v8eJaHylJIqZ40bRGQYJH2Xcl4arPXY9nBq2nwdOmtRPBK53/RtNTUJaLNBqtWcYMoZzOXS9KCnDAxk/4c8Kh~3422515~4403782; AKA_A2=A; ak_bmsc=BF492DEDFA79312CB5C6999083E7C820~000000000000000000000000000000~YAAQvY9lX2U32xyTAQAAbvvrIRkT/MzkGupkcHJuaDxGVLvBZT8+gcDQJ+RAW0VAknVAp8+Z3l2kvGFILuOGkpu+NJDVZ17xW2iiIlxrDEA3BdDPSCCm0Thixzpf+Eyr+omzVqy9UYCUPGkUzl3NbwJ3JAjBKAekKs6ieyADEAHNXaFsd50BddFUP1K90FeXNWee8PAVFt/wHJ2jNCe7RYyFHhNylHAcFVzTvqO2JzUjD42Yi+r/P2oC4UWiB3tO/++nU6W9qmbK2xrmdEHiXtGpLdg+eT9NEkdn7TKVgFq24IzfAq5JKamybBlIVoHsZCtz8cIYRW9phjWRue2hOdI92Wj1FFZoS+yyZ9Jkemo0ae6kXzc3E+xAKB6DnHKzf7GSRy51TyF1I6s37NBamWVCwc/3vr7P5BKISIvSuUPUPLKhL5C+811aTBcDbzhzQl7VdO1s75Q25SjwVk3j4w==; nsit=Pz2kcO1WQ7TGRCnKWfAtuuDw; nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTczMTQ0MjY1NiwiZXhwIjoxNzMxNDQ5ODU2fQ.plOf0oF31-k-ViHxi3Sp1YSS3iiLSew1dXoQmeubvpY; RT="z=1&dm=nseindia.com&si=e526dc8a-e83c-480f-8884-2cc1c89bdd37&ss=m3ev85wt&sl=f&se=8c&tt=21o9&bcn=%2F%2F684dd32a.akstat.io%2F"; _ga_87M7PJ3R97=GS1.1.1731440941.11.1.1731442663.59.0.0; _ga_WM2NSQKJEK=GS1.1.1731440941.11.1.1731442663.0.0.0; _abck=57EBBE7F4E05475567D3D567CBA60E96~0~YAAQvY9lX+KU2xyTAQAAYlIGIgyLJk6Oc7NvRX5zZKsZl843XO0ozb8zU5bzE+MfHehPbYlf6rtglLq4MTxJ2fYeRaWzzvtkL8DoRJoInbRUvM4eitbcJVqOjaCRPKGb9eidpmLXJiGZxK2az+YodpGxE98yOPcBkFXy7/ongm2Zuy+cA9fmuFLScXVFnjC7QucGLFS5kmjWW+mV7ZIab8AND7r2aNlRWarhxAAOX5JRsFeHxCLBwn9y98UYP4pYBuPUKjRpKVyqYb9YcY4qVU+lQIuqxZZL+lUqIiUY2S2gg8HpKG8ZPbyDzyIgOPrOBWUyA5Q+CYf9ErRuabkemkt5dShldCbeb4SJ7n6WDXfikbxmxUaOEz9XiwZvyD4K0fCAMZ15m8btHU3cbTMvIPp+OUv7IqnS1bldyArRGhxoDMP2CnxtT3DWkoKf/yWLVftzpy2vY1w=~-1~-1~-1; bm_sv=46B70ACF57B53F7999D6EBD310B396EC~YAAQvY9lX+OU2xyTAQAAYlIGIhniVySxtQidO9oAAQBvlQUtYbyST6+tvspEmefy91wKGCvFktFHwGTaJ2UHc4d0F/bIcPTvntId1DwakjbhXoqsMqQyIyXXgFpXchbXxtP51zguS6oiTfhwxtIXDyiQ9XPe6Evai0JgGeAjChdVgtCPULTV8qbV5xGClvvEhNeKlF8pahgTQQXN8YxQndr7ppIBoyFyY831EffI4NB4yZ+6PkVR4P9yICUaTgeHJ7D6Ag==~1; _abck=57EBBE7F4E05475567D3D567CBA60E96~-1~YAAQrIzQF5DYQgiTAQAA4esGIgyfR4byVcqIYLa+RbV9y9oep4E2Zkn76meE55fu0yfmWBKYXYdffUCc34v2d9OAjnTIzS0YsP4Llaafbh6cMIg5AT6FSEcYsHxvlqlEz5aPJZvkmyN3GBuynHb4QrZwfCUpPNe17j5d7IjjrGVMbinusHL3EbDCF9BgDpK16izFtPV+hIP7jEe8WC2gkVFfib5lS+3kQR/vyDRYWXG8S9f/eiHEpPM3EW1zlDdpiIJYSRbmzO3NowdihJDYtCTBGWsgAo1jcme8kpbeY1H2PS7iwm1RWoBWZtcGGcnYLvG5WSOLsGj667y9XmlzkAD8X63iULKNftvQg1/VvK1WMcuGjJtgF1pdUs0oXMclOcnbt6FVu+/9tY/Y0/FF2Psz5kn6ZDPzEjsc14chhEDkjmCTySWAx2BRMyLVIzz4kr4B21J3edE=~0~-1~-1; bm_sv=46B70ACF57B53F7999D6EBD310B396EC~YAAQrIzQF5HYQgiTAQAA4esGIhkok1UfdOWoyP2E7SqJKO9BxTLB4FmNIlqcyf6Np97XobIYGCzilGEiSsIE+fhTVkHD6nxZVjOw3Qtg5Mq/G0sfe438gQKH816FTGZxrFVPRujh4NHRp8+bwUmSz+vW2OopFrSDrRaBDzUseP4HsSD/7jg4InrX1/HgNdBWAZhmundI+a+fILHzEnSsmeFz7ooNlk6Z3BcDwZB+++WZiWm93UGFAHRSBhoqs83Wn49wkg==~1', 
    'priority': 'u=1, i', 
    'referer': 'https://www.nseindia.com/market-data/52-week-low-equity-market', 
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
