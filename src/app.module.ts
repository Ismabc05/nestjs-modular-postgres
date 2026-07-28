import { Module, HttpModule, HttpService } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { enviroments } from './enviroments';
import config from './config';

@Module({
  imports: [
    HttpModule,
    UsersModule,
    ProductsModule,
    DatabaseModule,
    ConfigModule.forRoot({
      // Configuramos nuestro ConfigModule
      envFilePath: enviroments[process.env.NODE_ENV] || '.env', // Dependiendo del entorno (NODE_ENV), carga un archivo .env diferente, en caso de que no pueda devolver ninguno le enviamos el .env
      load: [config], // Carga el archivo config para poder acceder a las variables de entorno de manera mas facil
      isGlobal: true, // Con esto le decimos que el configModule se pueda usar de manera global en cualquier modulo
      validationSchema: Joi.object({
        // Validamos las variables de entorno al iniciar la aplicación.
        // Si alguna falta o tiene un tipo incorrecto, NestJS no arrancará.
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        POSTGRES_DB: Joi.string().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.number().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_HOST: Joi.string().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService, // en realidad es el provider useClass
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        // En este provider se usa UseFactory ya que tenemos que iyectarle un servicio para devolver informacion que contiene ese servicio
        const tasks = await http
          .get('https://jsonplaceholder.typicode.com/todos')
          .toPromise(); // se usa una promise ya que la respuesta puede tardar porque es una peticion externa
        return tasks.data;
      },
      inject: [HttpService],
      // Este useFactory solo se puede hacer dentro de este modulo
    },
  ],
})
export class AppModule {}
