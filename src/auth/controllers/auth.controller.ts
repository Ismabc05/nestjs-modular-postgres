import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local')) // usamos el guardian proporcionado por passporta con el nombre que le hemos puesto a la estrategia
  @Post('login')
  login(@Req() req: Request) {
    // Recibe el request donde viene el usuario validado y lo retornamos
    return req.user;
  }
}
