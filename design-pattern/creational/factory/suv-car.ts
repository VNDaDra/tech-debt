import { Car, CarType } from "./car.interface";

export class SuvCar implements Car {
    type: CarType;

    constructor() {
        this.type = CarType.SUV;
    }
}