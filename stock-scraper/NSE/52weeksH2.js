const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://www.nseindia.com/api/live-analysis-data-52weekhighstock',
  headers: { 
    'accept': '*/*', 
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,ta;q=0.7', 
    'cookie': '_ga=GA1.1.1588830705.1730877301; nseQuoteSymbols=[{"symbol":"DEEDEV","identifier":null,"type":"equity"}]; defaultLang=en; bm_sz=758305D830EA0BEFA1F4E8C52561D1C5~YAAQXIMsMf+xbAaTAQAAy8dvIRmWlOK5lMqRtvEz+0UH5KxwRU3TrsbXRVgTL9Ok6NGeqtXSITpGohuooxBUhOe3rGq3ZgFyAWr/e3AyDNoq9zVDI+fMByGb5Pg+TKolVG7q29TkpdA+MmNFbz7CIWa7caeeUAEqXFrZwAZeU+ilvO2q9iHovSc5p9AJ3dSDxOo4MtfvCfE1gBmo8U7PQe7kUBrWwg+IgpYYH8HMXhEwlC8XZXYCBzogaPlCOU+6efKwYCLKxVSa12DT1gPD1K2P4qkSNtC+BZovNkpy9ThUCKZYSf9L6ZPpfu3fzCOV7InR7rlRwsmwZ2E1W4l2jBk49/PyMpq2Q1uiJ8n6VJx3cU0/5A1zYytLaFwQg54sdxPtkJBPT4zZFzHLUj+icEIJSnFIIW1v8eJaHylJIqZ40bRGQYJH2Xcl4arPXY9nBq2nwdOmtRPBK53/RtNTUJaLNBqtWcYMoZzOXS9KCnDAxk/4c8Kh~3422515~4403782; AKA_A2=A; ak_bmsc=BF492DEDFA79312CB5C6999083E7C820~000000000000000000000000000000~YAAQvY9lX2U32xyTAQAAbvvrIRkT/MzkGupkcHJuaDxGVLvBZT8+gcDQJ+RAW0VAknVAp8+Z3l2kvGFILuOGkpu+NJDVZ17xW2iiIlxrDEA3BdDPSCCm0Thixzpf+Eyr+omzVqy9UYCUPGkUzl3NbwJ3JAjBKAekKs6ieyADEAHNXaFsd50BddFUP1K90FeXNWee8PAVFt/wHJ2jNCe7RYyFHhNylHAcFVzTvqO2JzUjD42Yi+r/P2oC4UWiB3tO/++nU6W9qmbK2xrmdEHiXtGpLdg+eT9NEkdn7TKVgFq24IzfAq5JKamybBlIVoHsZCtz8cIYRW9phjWRue2hOdI92Wj1FFZoS+yyZ9Jkemo0ae6kXzc3E+xAKB6DnHKzf7GSRy51TyF1I6s37NBamWVCwc/3vr7P5BKISIvSuUPUPLKhL5C+811aTBcDbzhzQl7VdO1s75Q25SjwVk3j4w==; nsit=Pz2kcO1WQ7TGRCnKWfAtuuDw; nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTczMTQ0MjUwMiwiZXhwIjoxNzMxNDQ5NzAyfQ.uc9TtaOobavXOtW2_YQiny1zf5aeqqit2Qp-OnAA82M; RT="z=1&dm=nseindia.com&si=e526dc8a-e83c-480f-8884-2cc1c89bdd37&ss=m3ev85wt&sl=e&se=8c&tt=1yfu&bcn=%2F%2F684dd32a.akstat.io%2F"; _ga_87M7PJ3R97=GS1.1.1731440941.11.1.1731442511.58.0.0; _ga_WM2NSQKJEK=GS1.1.1731440941.11.1.1731442511.0.0.0; _abck=57EBBE7F4E05475567D3D567CBA60E96~0~YAAQvY9lXxWQ2xyTAQAA4foDIgwDqEgEAF5/Bpmmx9CpdX0Kk/FOWuwHyYRJ08vbE3zhmvegZURJHtNfSdUOSxIEXINowK+whW6wObUF8XQFJPVtVttcm2+dIAYJj3w5dwzp1UZ3qBXhc4MmuDgeZM+6I22DcA0afNJj0gYypQs7hp3NyggUJqnaTMiF7EvMJ1xQCs/qYS1itgdZXlpFyb0NBplUfHQ4QpE3jGROsMgjCs820fqIkmuq2OFIDilpQJjAxzUfb5HjH/GGsX11cv/xKTHcZvnCjR2kLS+zlS1r1COSqyYlFwWinYjxLLaP7IHx3FEtofsAHnaufEzPCFxZwL1I0rKHoNxNSafNOoFvN0KmRZz2GyVki4sqvBgHoluAgfzoXYkZW3UHO0wBCLzCp1pTg0n1BPfsByrtbrBBMAyqvrfem8BD0wVhhisY9EPOtrwOphU=~-1~-1~-1; bm_sv=46B70ACF57B53F7999D6EBD310B396EC~YAAQvY9lXxaQ2xyTAQAA4foDIhn9S+mgMXuswe9TMimRzOjEoqgs01b75ZTTZEEQ667T3m+F+gsPLHmrWv/TMO4oClLiq03AkVPrYY1rZuHU3Tkq8eiH+B9UKbfkeBqsL7X20r1FSy2Ri3ubsjkTO+5rJX7o7p7Re5HUfZZeiAw88Ff6aB4/PEBHaDgBA9mKuBL7bd4KyAufkD0a8B1uDUrQZAMhSb+DFcVhQ00kTJxF5xErRfxm07rSgUr4tja8dBttAQ==~1; _abck=57EBBE7F4E05475567D3D567CBA60E96~-1~YAAQrIzQF3DVQgiTAQAAxwkFIgwFnbKOt+wukiY++rYHRtuumRnB7LLR6wgm/07ZDJGdkbG/5pHEAy05gHj/LGaEKFno017+CaNnizOptMkZ2nujphtWjFJPR/l3DMBob1qRVxXQ6I/LlCos1AtWD18nhBzDupQ7c1jd6k7NM4tF0eqxAYDyOWANkjsxvcS6JgS8XGTfEPqM63ur1SrOdFojcd7fy20k5yuqtI4KII8o4McC777YRQlf9UzDMxY2c8NUXB2cICPGultemU/ZPIDXQut/somtb2MpK9IJrERrT7JnwcRaF+g4JuAweQJBiIAxuq0oxFD0+2uv/dacCZ+Q03g9BFmh5Z82abvyztrF+FVW8GvbLU8SXw9zL43N3fhweGdJrm7eicJKEWubXAOHyTT34GR7MaREHzNJ15D4tiBW8Hwy7XRMY0P7Mx/QdyBNbkRO/lk=~0~-1~-1; bm_sv=46B70ACF57B53F7999D6EBD310B396EC~YAAQrIzQF3HVQgiTAQAAxwkFIhlupRqSQe1zNmE1b3NVvqs6YGq7sxE4ikKmnRr0L8uJQ/lLIj87UYmHOTAM22+I0X5b9cxOBrcFra7pqGdlx9dYI268Z4712/IiPKMhLKUkqdcHU3jWNuxYFW8zr+V4+vFBPSFOe9BFFMOE3WFLI6T6sxC9wkb10BsnM0qSW9qD0ukML6pKkmEdWrvHpisFv7YQu+DT6jBxHKz2UYYZE8h48gQbuCjfPp6fa52YSgReBQ==~1', 
    'priority': 'u=1, i', 
    'referer': 'https://www.nseindia.com/market-data/52-week-high-equity-market', 
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
