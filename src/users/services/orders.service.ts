import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Order } from '../entities/order.entity';
import { Customer } from '../entities/customer.entity';
import { CreateOrderDto, UpdateOrderDto } from '../dtos/order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private readonly orderRepo: Repository<Order>,
    @InjectRepository(Customer)
    private readonly customerRepo: Repository<Customer>,
  ) {}

  findAll() {
    return this.orderRepo.find();
  }

  async findOne(id: number) {
    const order = await this.orderRepo.findOne({
      where: { id },
      relations: ['orderItems', 'orderItems.product'],
    });
    if (!order) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    return order;
  }

  async create(payload: CreateOrderDto) {
    const order = new Order();
    if (payload.customerId) {
      const customer = await this.customerRepo.findOne(payload.customerId);
      order.customer = customer;
    }
    return this.orderRepo.save(order);
  }

  async update(id: number, changes: UpdateOrderDto) {
    const order = await this.orderRepo.findOne(id);
    if (changes.customerId) {
      const customer = await this.customerRepo.findOne(changes.customerId);
      order.customer = customer;
    }
    return this.orderRepo.save(order);
  }

  async remove(id: number) {
    const order = await this.orderRepo.findOne(id);
    if (!order) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    this.orderRepo.remove(order);
    return {
      message: 'Order deleted successfully',
    };
  }
}
