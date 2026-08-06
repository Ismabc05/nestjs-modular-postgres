import { IsNotEmpty, IsPositive } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({ description: 'the customer ID' })
  readonly customerId: number;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
