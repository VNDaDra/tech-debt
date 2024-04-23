import { Observable } from "./observable.interface";
import { IObserver } from "./observer.interface";

export class Subject implements Observable {
    observers: Set<IObserver>;

    constructor() {
        this.observers = new Set();
    }

    subcribe(observer: IObserver): void {
        this.observers.add(observer);
    }
    unsubcribe(observer: IObserver): void {
        this.observers.delete(observer);
    }

    notify(data: unknown): void {
        this.observers.forEach(observer => {
            observer.update(data);
        })
    }

}