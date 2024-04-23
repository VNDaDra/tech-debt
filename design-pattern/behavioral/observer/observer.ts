import { Observable } from "./observable.interface";
import { IObserver } from "./observer.interface";

export class Observer implements IObserver {

    id: number;

    constructor(subject: Observable) {
        this.id = Date.now();
        subject.subcribe(this);
    }

    update(data: unknown): void {
        console.log(`OBSERVER ${this.id} received ${JSON.stringify(data)}`);
    }

}