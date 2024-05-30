import { expect, type Locator, type Page } from '@playwright/test';
import  {employeeGenerator}  from '../utils/employeeGenerator';

let employeegenerator = new employeeGenerator()


export class EmployeePage {
    readonly page: Page;
    readonly addEmployee: Locator
    readonly firstName: Locator
    readonly middleName: Locator
    readonly lastName: Locator
  

    constructor(page: Page) {
        this.page = page;
        this.addEmployee = page.getByRole('link', { name: 'Add Employee' })
        this.firstName = page.getByPlaceholder('First Name')
        this.middleName = page.getByPlaceholder('Middle Name')
        this.lastName = page.getByPlaceholder('Last Name')
    }



    async gotoEmployeePage() {

        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList', { waitUntil: "domcontentloaded" });
        await this.page.waitForTimeout(2000)
    }

    async addNewEmployee() {
        await this.addEmployee.click();
        await this.firstName.click();
        await this.firstName.fill(employeegenerator.createEmployee().firstname);
        await this.firstName.press('Tab');
        await this.middleName.fill(employeegenerator.createEmployee().middlename);
        await this.middleName.press('Tab');
        await this.lastName.fill(employeegenerator.createEmployee().lastname);
        await this.page.locator('form').getByRole('textbox').nth(4).click();
        await this.page.locator('form').getByRole('textbox').nth(4).fill('12222');
        await this.page.locator('div').filter({ hasText: /^Create Login Details$/ }).locator('label').click();
        await this.page.locator('div').filter({ hasText: /^Create Login Details$/ }).locator('span').click();
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByText('SuccessSuccessfully Saved×').click();

    }




}
