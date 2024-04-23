import { IObserver } from "./observer.interface";

export interface Observable {
    subcribe(observer: IObserver): void;

    unsubcribe(observer: IObserver): void;

    notify(...args: unknown[]): void;
}