/**
 * Web Scrapping es una técnica para la extracción de información de páginas web.
 */

// import puppeteer from 'puppeteer';
const puppeteer = require('puppeteer');

//función autoejecutable
(async () => {

    console.log('Launching browser ...');
    // const browser = await puppeteer.launch({headless: false});
    const browser = await puppeteer.launch({
        headless: false,
        ignoreDefaultArgs: ['--disable-extensions'],
    });

    const page = await browser.newPage();
    await page.goto('https://www.wikipedia.org/wiki/Node.js');

    var titulo1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML); // dentro de la consola del navegador

        return h1.innerHTML
    });

    console.log(`El título de la página es ${titulo1}`); // dentro de la consola de nuestro programa

    console.log('Closing browser ...');
    browser.close();
    console.log('Closed browser');
})();