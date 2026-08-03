import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'the name of the product' })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'the description of the product' })
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive() // valida que el precio sea mayor que 0
  @ApiProperty({ description: 'the price of the product' })
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({ description: 'the stock of the product' })
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({ description: 'the image of the product' })
  readonly image: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({ description: 'the brand id of the product' })
  brandId: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
