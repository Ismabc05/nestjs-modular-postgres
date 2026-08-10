import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  Index,
} from 'typeorm';

import { Brand } from './brand.entity';
import { Category } from './category.entity';

@Entity()
@Index(['price']) // crea un indice en la columna price para mejorar el rendimiento de las consultas que filtren por precio
// La indexacion sirve para mejorar el rendimiento de las consultas en la base de datos, ya que permite buscar registros de manera más eficiente. Sin embargo, es importante tener en cuenta que la indexación también puede afectar el rendimiento de las operaciones de escritura (inserciones, actualizaciones y eliminaciones), ya que se deben actualizar los índices cada vez que se modifica un registro. Por lo tanto, es recomendable crear índices solo en columnas que se utilicen frecuentemente en consultas y no en todas las columnas de una tabla.
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'int' })
  stock: number;

  @Column({ type: 'varchar' })
  image: string;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  updatedAt: Date;

  @ManyToOne(() => Brand, (brand) => brand.products)
  brand: Brand;

  @ManyToMany(() => Category, (category) => category.products)
  @JoinTable()
  categories: Category[];
}

// Las relaciones Uno a Muchos tiene la clave foranea la entidad que hace referencia a muchos, en este caso la entidad Product tiene la llave foranea de Brand, por eso se pone el decorador JoinColumn en la entidad Product.
