import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RequestLoggerMiddleware } from './middlewares/request-logger.middleware';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './exception-filters/http-exception.filter';
import { CatsController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './modules/common/common.module';
import { LoggerModule } from './modules/logger/logger.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ['.env.local', '.env'],
			isGlobal: true,
			cache: true,
		}),
		CommonModule,
		LoggerModule,
	],
	controllers: [CatsController],
	providers: [
		{
			provide: APP_FILTER,
			useClass: HttpExceptionFilter,
		},
	],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(RequestLoggerMiddleware).forRoutes('*');
	}
}
