import faker from 'faker';

import { BaseModel } from "./Base";

export class Company extends BaseModel {
    name: string;
    catchPhrase: string;

    constructor() {
        super(faker);

        this.name = this.faker.company.companyName();
        this.catchPhrase = this.faker.company.catchPhrase();
    }
}
