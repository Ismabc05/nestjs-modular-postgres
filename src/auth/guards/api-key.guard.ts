import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from './../decorators/public.decorator';

import config from '../../config';
import { ConfigType } from '@nestjs/config';

import { Request } from 'express';
@Injectable()
export class ApiKeyGuard implements CanActivate {
  //Los Guards en NestJS son clases que controlan si una petición tiene permiso para acceder a una ruta o endpoint.
  constructor(
    private reflector: Reflector, // lee el metadata
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  // Un guardian es una clase que implementa CanActive que es una funciona que se encarga de darnos acceso al endpoint o no
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.get(IS_PUBLIC_KEY, context.getHandler()); // Se encarga de leer el valor de la metadata de un endpoint
    if (isPublic) {
      return true;
    }
    const request = context.switchToHttp().getRequest<Request>(); // Me trae los headers del request de la peticion
    const authHeader = request.header('Auth'); // Obtenemos el valor del header Auth
    const isAuth = authHeader === this.configService.apiKey; // si es igual a 1234 podemos acceder
    if (!isAuth) {
      throw new UnauthorizedException('not allowed');
    }
    return isAuth;
  }
}
