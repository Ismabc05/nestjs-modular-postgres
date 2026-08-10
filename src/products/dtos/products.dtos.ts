import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
  IsArray,
  IsOptional,
  Min,
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
  readonly brandId: number;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty({ description: 'the category id of the product' })
  readonly categoryId: number[];
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

export class FilterProductsDto {
  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({ description: 'the limit of products to return' })
  limit: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  @ApiProperty({ description: 'the offset of products to return' })
  offset: number;
}
