import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateOrderItemDto } from '../dtos/order-item.dto';

import { Order } from '../entities/order.entity';
import { OrderItem } from '../entities/order-product.entity';
import { Product } from '../../products/entities/product.entity';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private readonly orderItemRepository: Repository<OrderItem>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(data: CreateOrderItemDto) {
    const order = await this.orderRepository.findOne(data.orderId);
    const product = await this.productRepository.findOne(data.productId);
    const orderItem = this.orderItemRepository.create({
      quantity: data.quantity,
      order,
      product,
    });
    return this.orderItemRepository.save(orderItem);
  }
}
