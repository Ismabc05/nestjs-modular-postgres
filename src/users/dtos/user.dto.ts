import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Length,
  IsOptional,
  IsPositive,
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
