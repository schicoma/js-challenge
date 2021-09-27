// import puppeteer from 'puppeteer';
const puppeteer = require('puppeteer');

//función autoejecutable
(async () => {

    console.log('Launching browser ...');
    // const browser = await puppeteer.launch({headless: false});
    const browser = await puppeteer.launch({
        ignoreDefaultArgs: ['--disable-extensions'],
    });

    console.log('Closing browser ...');
    browser.close();
    console.log('Closed browser');
})();