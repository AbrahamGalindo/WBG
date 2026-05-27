const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage')

test('Validate our priorities home page test', async ({ page }) => {

    const Home = new HomePage(page)

    await Home.gotoWorldBankPage()
    await Home.validateOurPriorities()

});

test('Validate who we are home page test', async ({ page }) => {

    const Home = new HomePage(page)

    await Home.gotoWorldBankPage()
    await Home.validateWhoWeAre()

});

test('Validate what we do home page test', async ({ page }) => {

    const Home = new HomePage(page)

    await Home.gotoWorldBankPage()
    await Home.validateWhatWeDo()

});

test('Validate where we work home page test', async ({ page }) => {

    const Home = new HomePage(page)

    await Home.gotoWorldBankPage()
    await Home.validateWhereWeWork()

});
test('Validate work with us home page test', async ({ page }) => {

    const Home = new HomePage(page)

    await Home.gotoWorldBankPage()
    await Home.validateWorkWithUs()

});