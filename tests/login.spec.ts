import {test,expect,chromium} from '@playwright/test'
import { LoginPage } from '@pages/loginPage'



test('Login to app',async ({page}) => {
    let loginpage = new LoginPage(page)
    test.slow()
    await loginpage.goto()
    await loginpage.loginToWebsite('Admin','admin123')
    await loginpage.verifyDashboardisVisible(true)
 
})






