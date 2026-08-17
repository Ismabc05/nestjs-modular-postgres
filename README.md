# NestJS Modular API

API REST desarrollada con **NestJS**, utilizando una arquitectura modular y PostgreSQL como base de datos.

El proyecto implementa diferentes conceptos de NestJS como módulos, controladores, servicios, DTOs, Guards, Passport, autenticación mediante JWT, validaciones y relaciones entre entidades.

## 🚀 Tecnologías utilizadas

- **NestJS 7**
- **TypeScript**
- **PostgreSQL**
- **TypeORM**
- **Passport**
- **Passport Local**
- **Passport JWT**
- **JWT**
- **Class Validator**
- **Swagger**
- **Docker**

## 📁 Arquitectura del proyecto

El proyecto está organizado de forma modular para separar las diferentes responsabilidades de la aplicación.

Entre los principales módulos se encuentran:

- **Auth** → gestión de autenticación y autorización.
- **Users** → gestión de usuarios.
- **Customers** → gestión de clientes.
- **Products** → gestión de productos.
- **Categories** → gestión de categorías.

Cada módulo contiene sus propios controladores, servicios, DTOs y demás elementos necesarios.

## 🔐 Autenticación

El proyecto utiliza **Passport** para gestionar la autenticación.

Se utilizan dos estrategias principales:

### Local Strategy

La estrategia `local` permite autenticar a los usuarios mediante:

```text
email
password

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
