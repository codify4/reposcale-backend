import { IsString, IsOptional, IsNumber, IsDateString, Min, Max } from 'class-validator';

export class CreateShareLinkDto {
  @IsNumber()
  repositoryId: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsDateString()
  expiresAt?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  maxViews?: number;
} 