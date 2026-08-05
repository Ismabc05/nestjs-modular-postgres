import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer.controller';
import { CustomersService } from './services/customers.services';
import { UsersController } from './controllers/user.controller';
import { UsersService } from './services/users.services';
import { ProductsModule } from 'src/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Order } from './entities/order.entity';
import { Customer } from './entities/customer.entity';
import { OrderItem } from './entities/order-product.entity';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forFeature([User, Order, Customer, OrderItem]),
  ],
  controllers: [CustomerController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
