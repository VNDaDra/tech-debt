import { Controller, Get, Param } from '@nestjs/common';
import { ParseObjectIdPipe } from './pipes/parse-objectid.pipe';
import { ObjectId } from 'mongoose';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('cats')
@Controller('cats')
export class CatsController {
	@ApiParam({ name: 'id', type: String })
	@Get(':id')
	findOneCat(@Param('id', ParseObjectIdPipe) id: ObjectId): string {
		return `This is cat ${id}`;
	}
}
