import { SystemLogger } from "./logger/system-logger.service";
import { UserLogger } from "./logger/user-logging.service";
import { Payment } from "./payment/paymemt.service";

const systemLogger = new SystemLogger();
const userLogger = new UserLogger();

const systemPayment = new Payment(systemLogger);
const userPayment = new Payment(userLogger);

const amountToPay = 5;

systemPayment.pay(amountToPay);
userPayment.pay(amountToPay);