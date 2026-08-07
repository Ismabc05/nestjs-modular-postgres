import { Controller, Put, Param, Delete } from '@nestjs/common';
import { Body, Post } from '@nestjs/common';
import { CreateOrderItemDto } from '../dtos/order-item.dto';
import { UpdateOrderItemDto } from '../dtos/order-item.dto';

import { OrderItemService } from '../services/order-item.service';

@Controller('order-item')
export class OrderItemController {
  constructor(private readonly orderItemService: OrderItemService) {}

  @Post()
  create(@Body() payload: CreateOrderItemDto) {
    return this.orderItemService.create(payload);
  }

  @Put(':id')
  update(@Body() payload: UpdateOrderItemDto, @Param('id') id: number) {
    return this.orderItemService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.orderItemService.delete(id);
  }
}
