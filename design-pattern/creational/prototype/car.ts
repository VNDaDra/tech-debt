import { Cloneable } from "./clonable.interface";

export class Car implements Cloneable<Car> {
    type: string;

    constructor(type: string) {
        this.type = type;
    }

    clone(): Car {
        return new Car(this.type);
    }

}