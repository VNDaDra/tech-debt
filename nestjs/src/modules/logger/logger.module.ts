import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [
    CommonModule,
  ],
  providers: [
    LoggerService,
  ],
  exports: [
    LoggerService,
  ]
})
export class LoggerModule {}
