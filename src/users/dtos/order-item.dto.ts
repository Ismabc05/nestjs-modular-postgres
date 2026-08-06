import { IsNotEmpty, IsPositive } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateOrderItemDto {
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({ description: 'the quantity' })
  readonly quantity: number;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({ description: 'the order ID' })
  readonly orderId: number;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({ description: 'the product ID' })
  readonly productId: number;
}

export class UpdateOrderItemDto extends PartialType(CreateOrderItemDto) {}
