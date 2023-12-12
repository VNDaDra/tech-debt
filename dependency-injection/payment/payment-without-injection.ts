import { Logger } from "../logger/logger.interface";
import { SystemLogger } from "../logger/system-logger.service";

export class PaymentWithoutInjection {
  
  private readonly logger: Logger;
  constructor() {
    this.logger = new SystemLogger()
  }

  pay(amount: number) {
    this.logger.printLog(`Paying $${amount}`);
  }
}