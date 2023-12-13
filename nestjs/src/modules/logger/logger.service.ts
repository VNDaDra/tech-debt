import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';

@Injectable()
export class LoggerService implements OnModuleInit {
	private readonly logger = new Logger('SystemLog');

	constructor(
		@Inject('CONSTANT')
		private readonly constant,
	) {}

	onModuleInit() {
		this.logger.log(this.constant.apiUrl);
	}
}
