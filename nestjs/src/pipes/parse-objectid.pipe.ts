import {
	PipeTransform,
	Injectable,
	ArgumentMetadata,
	BadRequestException,
} from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class ParseObjectIdPipe implements PipeTransform {
	transform(value: any, metadata: ArgumentMetadata) {
		try {
			if (metadata.type === 'param' && value) {
				return new Types.ObjectId(value);
			}
			throw new BadRequestException(
				'Argument expected should be an ObjectId string',
			);
		} catch (err) {
			throw new BadRequestException(
				'Argument expected should be an ObjectId string',
			);
		}
	}
}
