import { CarType } from "./car.interface";
import { SedanCar } from "./sedan-car";
import { SuvCar } from "./suv-car";

export class CarFactory {
    static createCar(type: CarType) {
        switch (type) {
            case CarType.SEDAN:
                return new SedanCar();
            case CarType.SUV:
                return new SuvCar();
        }
    }
}