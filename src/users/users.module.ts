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
import { OrdersService } from './services/orders.service';
import { OrdersController } from './controllers/orders.controller';
import { OrderItemService } from './services/order-item.service';
import { OrderItemController } from './controllers/order-item.controller';
import { Product } from 'src/products/entities/product.entity';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forFeature([User, Order, Customer, OrderItem, Product]),
  ],
  controllers: [
    CustomerController,
    UsersController,
    OrdersController,
    OrderItemController,
  ],
  providers: [CustomersService, UsersService, OrdersService, OrderItemService],
})
export class UsersModule {}
