
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('checks that draw button displays div with id=choices',async () => {
    await driver.findElement(By.xpath('//boutton[text()="Draw"')).click()
    const choices = await driver.findElement(By.xpath('//div[contains(text(),"choices")]'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBeTruthy()
})

test('clicking addto duo displats div with id= player-duo', async () => {
    // await driver.findElement(By.xpath('//button[text()="Draw"')).click()
    await driver.findElement(By.xpath('/button[text()="Add to Duo"')).click()
    const duo = driver.findElement(By.xpath('div[contains(text(),"player-duo")]'))
    expect(duo).toBeTruthy()
})

    