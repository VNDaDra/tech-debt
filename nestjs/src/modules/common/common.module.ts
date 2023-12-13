import { Module } from '@nestjs/common';
import { CommonService } from './common.service';

@Module({
	providers: [
		{
			provide: 'CONSTANT',
			useValue: {
				apiUrl: 'https://mock-api.com',
			},
		},
		CommonService,
	],
	exports: ['CONSTANT'],
})
export class CommonModule {}
