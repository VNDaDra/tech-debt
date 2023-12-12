import { UserLogger } from "./logger/user-logging.service";
import { PaymentWithoutInjection } from "./payment/payment-without-injection";
import { Payment } from "./payment/payment.service";

const userLogger = new UserLogger();

const systemPayment = new PaymentWithoutInjection();
const userPayment = new Payment(userLogger);

const amountToPay = 5;

systemPayment.pay(amountToPay);
userPayment.pay(amountToPay);