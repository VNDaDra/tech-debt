import { Car, CarType } from "./car.interface";

export class SedanCar implements Car {
    type: CarType ;

    constructor() {
        this.type = CarType.SEDAN;
    }
}