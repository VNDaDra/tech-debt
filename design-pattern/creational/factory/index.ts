import { CarFactory } from "./car-factory";
import { CarType } from "./car.interface";

function bootstrap() {
    const car = CarFactory.createCar(CarType.SEDAN);
    console.log(car);
}

bootstrap();