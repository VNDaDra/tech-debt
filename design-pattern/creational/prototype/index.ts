import { Car } from "./car";

class Application {

    sample1() {
        const originalCar = new Car('SUV');
        const clonedCar = originalCar.clone();

        console.log('Original: ', originalCar);
        console.log('Cloned: ', clonedCar);
    }
}

const app = new Application();
app.sample1();