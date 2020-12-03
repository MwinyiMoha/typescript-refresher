export class BaseModel {

    location: {
        lat: number,
        lng: number
    }

    constructor(protected faker: Faker.FakerStatic) {
        this.location = {
            lat: parseFloat(this.faker.address.latitude()),
            lng: parseFloat(this.faker.address.longitude())
        }
    }
}
