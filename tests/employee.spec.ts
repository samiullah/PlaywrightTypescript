import {  test, expect} from "@playwright/test";
import { LoginPage } from "@pages/loginPage";
import { EmployeePage } from "@pages/employeePage";

test('employee add',async ({page}) => {

    let loginpage = new LoginPage(page)
    let employeePage = new EmployeePage(page)

    await loginpage.goto()
    await loginpage.loginToWebsite('Admin','admin123')
    await loginpage.verifyDashboardisVisible(true)
    await employeePage.gotoEmployeePage()
    await employeePage.addNewEmployee()

})     