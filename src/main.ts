import { NestFactory, Reflector } from '@nestjs/core';
import { ValidationPipe, ClassSerializerInterceptor } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    // Validamos que se pueda usar las validaciones de forma global
    new ValidationPipe({
      whitelist: true, // Habilitamos esta opcion para que elimine propiedades que no estan definidas en los DTOs.
      forbidNonWhitelisted: true, //  lanza un error si se envian propiedades que no estan definidas en los DTOs.
      transformOptions: {
        enableImplicitConversion: true, // Habilitamos esta opcion para que transforme los tipos de datos de los DTOs.
      },
    }),
  );
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector))); // habilitamos la serializacion para poder excluir propiedades de las entidades o añadir propiedades

  // Configuracion para Swagger Document
  const config = new DocumentBuilder()
    // Creamos un nuevo documento con su titulo, descripcion.. y al final .build para construirlo
    .setTitle('API')
    .setDescription('PLATZI STORE')
    .setVersion('1.0')
    .build();
  const documentFactory = SwaggerModule.createDocument(app, config); // Creamos el document config que va tener todos los endpoints de app
  SwaggerModule.setup('docs', app, documentFactory); // Montamos el setup donde se va a poder ver ese documento

  app.enableCors(); // Habilitamos los cors para poder recibir peticiones desde cualquier dispositivo
  await app.listen(3000);
}
bootstrap();
