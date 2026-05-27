const { expect } = require('@playwright/test');

class HomePage {

    constructor(page) {
        this.page = page
        this.ourPriorities_menu = page.getByRole('menuitem', { name: 'Our Priorities' })
        this.whoWeAre_menu = page.getByRole('menuitem', { name: 'Who We Are' })
        this.whatWeDo_menu = page.getByRole('menuitem', { name: 'What We Do' })
        this.whereWeWork_menu = page.getByRole('menuitem', { name: 'Where We Work' })
        this.workWithUs_menu = page.getByRole('menuitem', { name: 'Work With Us' })
        this.closeDetails_icon = page.getByRole('button', { name: 'Close navigation' })
        this.ourPriorities_label = page.getByRole('link', { name: 'Our Priorities' })
        this.whoWeAre_label = page.getByRole('link', { name: 'Who We Are' })
        this.whatWeDo_label = page.getByRole('link', { name: 'What We Do' })
        this.whereWeWork_label = page.getByRole('link', { name: 'Where We Work' })
        this.workWithUs_label = page.getByRole('link', { name: 'Work With Us' })
    }

    async gotoWorldBankPage() {
        await this.page.goto('https://www.worldbank.org/ext/en/home');
    }

    async validateOurPriorities() {
        await this.clickOnOurPrioritiesMenu()
        await expect(this.ourPriorities_label.first()).toBeVisible()
    }

    async validateWhoWeAre() {
        await this.clickOnWhoWeAreMenu()
        await expect(this.whoWeAre_label.first()).toBeVisible()
    }

    async validateWhatWeDo() {
        await this.clickOnWhatWeDoMenu()
        await expect(this.whatWeDo_label).toBeVisible()
    }

    async validateWhereWeWork() {
        await this.clickOnWhereWeWorkMenu()
        await expect(this.whereWeWork_label).toBeVisible()
    }

    async validateWorkWithUs() {
        await this.clickOnWorkWithUsMenu()
        await expect(this.workWithUs_label).toBeVisible()
    }

    async clickOnOurPrioritiesMenu() {
        await this.ourPriorities_menu.click()
    }

    async clickOnWhoWeAreMenu() {
        await this.whoWeAre_menu.click()
    }

    async clickOnWhatWeDoMenu() {
        await this.whatWeDo_menu.click()
    }

    async clickOnWhereWeWorkMenu() {
        await this.whereWeWork_menu.click()
    }

    async clickOnWorkWithUsMenu() {
        await this.workWithUs_menu.click()
    }
}

module.exports = HomePage;