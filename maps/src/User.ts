import faker from 'faker';

import { BaseModel } from './Base';

export class User extends BaseModel {
    firstName: string;
    lastName: string;

    constructor() {
        super(faker);

        this.firstName = this.faker.name.firstName();
        this.lastName = this.faker.name.lastName();
    }
}
