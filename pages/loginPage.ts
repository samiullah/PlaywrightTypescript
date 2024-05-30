import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly gettingStartedHeader: Locator;
  readonly pomLink: Locator;
  readonly tocList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.locator('a', { hasText: 'Get started' });
    this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
    this.pomLink = page.locator('li', {
      hasText: 'Guides',
    }).locator('a', {
      hasText: 'Page Object Model',
    });
    this.tocList = page.locator('article div.markdown ul > li > a');
  }


  
  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{waitUntil:"domcontentloaded"});
  }

  async getStarted() {
    await this.getStartedLink.first().click();
    await expect(this.gettingStartedHeader).toBeVisible();
  }

  async pageObjectModel() {
    await this.getStarted();
    await this.pomLink.click();
  }

  async loginToWebsite(username:string, password:string){
    await this.page.getByPlaceholder('Username').click()
    await this.page.getByPlaceholder('User').fill(username)
    await this.page.getByPlaceholder('Password').click()
    await this.page.getByPlaceholder('Password').fill(password)
    await this.page.locator('//button[@type="submit"]').click()
    await this.page.waitForLoadState("domcontentloaded")
    await this.page.reload()
    await this.page.waitForTimeout(20000)
  }

  async verifyDashboardisVisible(state:boolean){

    if(state == true){
    let isDashboardVisible =  await this.page.locator('//h6[text()="Dashboard"]').isVisible()
    expect(isDashboardVisible).toBeTruthy()
    }
    else {
      let isDashboardVisible =  await this.page.locator('//h6[text()="Dashboard"]').isHidden()
      expect(isDashboardVisible).toBeTruthy()

    }
  }
}
