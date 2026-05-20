import { IsString, IsInt, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class CreateCarDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsInt()
  year: number;

  @IsString()
  category: string;

  @IsString()
  transmission: string;

  @IsString()
  fuelType: string;

  @IsInt()
  seats: number;

  @IsNumber()
  pricePerDay: number;

  @IsString()
  @IsOptional()
  currency?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  featured?: boolean;
}
