import { expect, type Locator, type Page } from '@playwright/test';
import {createEmployee} from "@utils/createEmployee"

export class AddEmployeePage {

  readonly page: Page;
  readonly firstName: Locator;
  readonly middleName: Locator;
  readonly lastName: Locator;
  readonly id: Locator;
  readonly saveButton: Locator;
  readonly successMessage: Locator

  addemp = new createEmployee()
 

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByPlaceholder('First Name')
    this.middleName = page.getByPlaceholder('Middle Name')
    this.lastName = page.getByPlaceholder('Last Name')
    this.id = page.locator('form').getByRole('textbox').nth(4)
    this.saveButton = page.getByRole('button', { name: 'Save' })
    this.successMessage = page.getByText('SuccessSuccessfully Saved')
  
  }


  
  async gotoAddEmployee() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',{waitUntil:"domcontentloaded"});
  }


  async addNewEmployee(){
  await this.firstName.click();
  await this.firstName.fill((this.addemp.getEmployee()).firstname);
  await this.middleName.click();
  await this.middleName.fill((this.addemp.getEmployee()).middlename);
  await this.lastName.click();
  await this.lastName.fill((this.addemp.getEmployee()).lastname);
  await this.id.click();
  await this.id.clear()
  await this.id.fill((this.addemp.getEmployee()).id);
  await this.saveButton.click();
  await this.successMessage.click();
  }

 

}
