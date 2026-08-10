import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Length,
  IsOptional,
  IsPositive,
  IsNumber,
  Min,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ description: 'the email of user' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  @ApiProperty({ description: 'the password of user' })
  readonly password: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'the role of user' })
  readonly role: string;

  @IsOptional()
  @IsPositive()
  @ApiProperty({ description: 'the customer ID of user' })
  readonly customerId?: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class FilterUserDto {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @ApiProperty({ description: 'the limit of users to return' })
  limit: number; // Es el limite de usuarios que quiero traer de la base de datos

  @IsOptional()
  @Min(0)
  @IsNumber()
  @ApiProperty({ description: 'the offset of users to return' })
  offset: number; // Es el numero de usuarios que quiero saltar para traer los siguientes

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'the name of user to filter' })
  email: string;
}
