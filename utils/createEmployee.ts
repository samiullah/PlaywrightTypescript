import { faker } from '@faker-js/faker';

export class createEmployee {

    getEmployee():employee{

        return {
            firstname: faker.person.firstName(),
            middlename: faker.person.middleName(),
            lastname: faker.person.lastName(),
            id: faker.string.alphanumeric(5)
        
          };

    }
}