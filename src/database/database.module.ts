import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import config from 'src/config';

const API_KEY = '12345678';
const API_KEY_PROD = 'PROD734575';

@Global() // Todos los providers que defina en este módulo van a ser globales, es decir lo puede usar cualquier modulo gracias a este decorador
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY, // el provider useValue se usa para traer valores de entorno, no es muy aconsejable ya que podemos tener muchos valores, para ellos se usa el ConfigModule
    },
    {
      provide: 'PG',
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, password, port, dbName } = configService.postgres;
        const client = new Client({
          user,
          host,
          database: dbName,
          password,
          port,
        });

        client.connect();
        return client;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['API_KEY', 'PG'],
})
export class DatabaseModule {}
