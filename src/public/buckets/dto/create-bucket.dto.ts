import { IsString, IsOptional, IsArray, IsNumber, IsDateString, Min } from 'class-validator';

export class CreateBucketDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsNumber({}, { each: true })
  repositoryIds: number[]; // Can be 1 or multiple

  @IsString()
  @IsOptional()
  password?: string;

  @IsDateString()
  @IsOptional()
  expiresAt?: string;

  @IsNumber()
  @IsOptional()
  @Min(1)
  maxMembers?: number;
}