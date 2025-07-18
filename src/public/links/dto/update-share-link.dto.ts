import { PartialType } from '@nestjs/swagger';
import { CreateShareLinkDto } from './create-share-link.dto';

export class UpdateShareLinkDto extends PartialType(CreateShareLinkDto) {}