const { fetch } = require('undici');
const cheerio = require('cheerio');

const url = 'https://news.google.com/home?hl=en-US&gl=US&ceid=US:en';

async function index() {
    const response = await fetch(url).then(res => res.text());
    const $ = cheerio.load(response);
    const news = [];

    $('article').each((i, el) => {
        const title = $(el).find('a').text();
        const source = $(el).find('.vr1PYe').text();
        const time = $(el).find('.hvbAAd').text();
        const author = $(el).find('.bInasb').text();
        const link = "https://news.google.com/" + $(el).find('a').attr('href'); 
        news.push({ title, source, time, author, link });
    });

    return news;
}

module.exports = index;