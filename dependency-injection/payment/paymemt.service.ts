import { Logger } from "../logger/logger.interface";

export class Payment {
  constructor(private logger: Logger) {}

  pay(amount: number) {
    this.logger.printLog(`Paying $${amount}`);
  }
}