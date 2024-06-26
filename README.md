# Public APIs (Scrapper) - Use at your own risk
This is a list of available APIs that can be used to get data from the web.

- [Requirements](#requirements)
- [Example of returned data](#example-of-returned-data)
  - [Random Quotes](#random-quotes)
  - [Latest World News based on Google News](#latest-world-news-based-on-google-news)
  - [Spotify Daily Trendings (200 Songs)](#spotify-daily-trendings-200-songs)
  - [Live Cryptocurrency Prices (50 Top Coins)](#live-cryptocurrency-prices-50-top-coins)
  - [Top 10 Netflix Movies](#top-10-netflix-movies)
 
![image](https://github.com/johnandreopoulos/Public-APIs/assets/39243722/5eb7180d-f9e1-41e5-833d-c999b81325fa)
  
The following APIs are available for use. Each API returns a list of objects with the data requested. The data is returned in JSON format.

# Requirements
- Install Node.js [Node.js](https://nodejs.org/en/download/)
  
The following packages are used to get the data from the web:
- [undici](https://www.npmjs.com/package/undici)
- [cheerio](https://www.npmjs.com/package/cheerio)
- [express](https://www.npmjs.com/package/express)

Windows installation `npm install`

Linux installation `sudo npm install`

---

# Example of returned data
## Random Quotes
It returns a random quote from a list of quotes.
- Address URL Used: https://best-quotations.com/tyxaio.php
```js
[
    {
      quote: 'Is that a gun in your pocket, or are you just glad to see me?',
      author: 'Mae West, 1893-1980, American actress'
    }, {
      quote: 'Coming back to where you started is not the same as never leaving.',
      author: 'Terry Pratchett, 1948-2015, British writer'
    }, { MORE HERE }
]
```

## Latest World News based on Google News
It returns a list of news articles based on google news.
- Address URL Used: https://news.google.com/home?hl=en-US&gl=US&ceid=US:en
```js
[
    {
      title: 'Israel-Gaza war: US calls for temporary ceasefire in UN text',
      source: 'BBC.com',
      time: '1 hour ago',
      author: '',
      link: 'https://news.google.com/./articles/    CBMiMWh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy93b3JsZC11cy1jYW5hZGEtNjgzNDYwMjfSATVodH  RwczovL3d3dy5iYmMuY29tL25ld3Mvd29ybGQtdXMtY2FuYWRhLTY4MzQ2MDI3LmFtcA?hl=en-US&    gl=US&ceid=US%3Aen'
    }, {
      title: 'Gaza cease-fire, Minnesota shooting, Colorado shooting, Julian    Assange, California rain, Biden: Daily Briefing',
      source: 'USA TODAY',
      time: '55 minutes ago',
      author: 'Nicole FallertBy Nicole Fallert',
      link: 'https://news.google.com/./articles/    CBMic2h0dHBzOi8vd3d3LnVzYXRvZGF5LmNvbS9zdG9yeS9uZXdzLzIwMjQvMDIvMjAvaXNyYWVsLW  hhbWFzLWNlYXNlLWZpcmUtc2hvb3RpbmctZ3VuLWNhbGlmb3JuaWEtd2VhdGhlci83MjY2Nzg5MTAw    Ny_SAQA?hl=en-US&gl=US&ceid=US%3Aen'
    }, { MORE HERE }
]
```

## Spotify Daily Trendings (200 Songs)
It returns a list of 200 songs trending on Spotify.
- Address URL Used: https://kworb.net/spotify/country/global_daily.html 
```js
[
  {
    artist: 'Benson Boone',
    track: 'Beautiful Things',
    streams: '5,056,620',
    streamsPlus: '-375,698',
    sevenDay: '38,108,850',
    sevenDayPlus: '+573,214',
    totalStreams: '129,370,578'
  }, {
    artist: 'Taylor Swift',
    track: 'Cruel Summer',
    streams: '4,520,317',
    streamsPlus: '-421,229',
    sevenDay: '32,322,647',
    sevenDayPlus: '+249,426',
    totalStreams: '1,313,238,641'
  }, { MORE HERE }
]
```

## Live Cryptocurrency Prices (50 Top Coins)
It returns a list of 50 top cryptocurrencies and their prices.
- Address URL Used: https://www.livecoinwatch.com/
```js
[
  {
    sort: '1',
    name: 'BTC Bitcoin',
    price: '$52338.87',
    marketCap: '$1.0276 T',
    volume: '$19.65 B',
    liquidity: '$19.65 B',
    allTimeHigh: '$68780.77'
  }, {
    sort: '2',
    name: 'ETH Ethereum',
    price: '$2970.47',
    marketCap: '$351.53 B',
    volume: '$18.57 B',
    liquidity: '$18.57 B',
    allTimeHigh: '$4861.29'
  }, { MORE HERE }
]
```

## Top 10 Netflix Movies
It returns a list of the top 10 movies on Netflix.
- Address URL Used: https://www.netflix.com/tudum/top10/
```js
[
  {
    "rank": "1",
    "name": "Despicable Me 3",
    "weeksInTop10": "1",
    "hoursPlayed": "23,900,000",
    "runtime": "1:30",
    "views": "15,900,000"
  }, {
    "rank": "2",
    "name": "Orion and the Dark",
    "weeksInTop10": "2",
    "hoursPlayed": "19,700,000",
    "runtime": "1:33",
    "views": "12,700,000"
  }, { MORE HERE }
]
```
