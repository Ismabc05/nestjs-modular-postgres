import { IsString, IsUrl, IsNotEmpty } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'the image of the brand' })
  readonly name: string;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({ description: 'the image of the brand' })
  readonly image: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
