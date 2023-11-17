import { Logger } from "./logger.interface";

export class SystemLogger implements Logger{
  printLog(message: string): void {
    console.log(`SYSTEM: ${message}`);
  }
}