import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client } from 'pg';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto, FilterUserDto } from '../dtos/user.dto';

import { ProductsService } from './../../products/services/products.service';
import { CustomersService } from './customers.services';

@Injectable()
export class UsersService {
  constructor(
    private productsService: ProductsService,
    private customersService: CustomersService,
    private configservice: ConfigService,
    @Inject('PG') private clientPg: Client,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  findAll(params: FilterUserDto) {
    if (params) {
      const { limit, offset } = params;
      return this.userRepo.find({
        relations: ['customer'],
        take: limit, // take es el limite de usuarios que quiero traer de la base de datos
        skip: offset, // skip es el numero de usuarios que quiero saltar para traer los siguientes
      });
    }
    return this.userRepo.find({
      relations: ['customer'],
    });
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne({
      where: { id },
      relations: ['customer'],
    });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async create(data: CreateUserDto) {
    const newUser = this.userRepo.create(data);
    if (data.customerId) {
      const customer = await this.customersService.findOne(data.customerId);
      newUser.customer = customer;
    }
    await this.userRepo.save(newUser);
    return newUser;
  }

  async update(id: number, changes: UpdateUserDto) {
    const user = await this.userRepo.findOne(id);
    if (changes.customerId) {
      const customer = await this.customersService.findOne(changes.customerId);
      user.customer = customer;
    }
    const updatedUser = this.userRepo.merge(user, changes);
    const savedUser = this.userRepo.save(updatedUser);
    return savedUser;
  }

  async remove(id: number) {
    const user = await this.userRepo.findOne(id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    this.userRepo.remove(user);
    return {
      message: 'Product deleted successfully',
    };
  }

  async getOrdersByUser(id: number) {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: await this.productsService.findAll(),
    };
  }
}
