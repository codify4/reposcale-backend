import { IsOptional, IsString } from 'class-validator';

export class AccessShareLinkDto {
  @IsOptional()
  @IsString()
  password?: string;
} 