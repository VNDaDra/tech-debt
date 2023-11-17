import { Logger } from "./logger.interface";

export class UserLogger implements Logger{
  printLog(message: string) {
    console.log(`INFO: ${message}`);
  }
}