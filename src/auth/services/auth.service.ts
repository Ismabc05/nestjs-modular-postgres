import { Injectable } from '@nestjs/common';
import { UsersService } from './../../users/services/users.services';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { PayloadToken } from '../models/token.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      return user;
    }
    return null;
  }

  generateJWT(user: User) {
    const payload: PayloadToken = { role: user.role, sub: user.id }; // sacamos lo que queremos que esté dentro el token
    return {
      access_token: this.jwtService.sign(payload), // creamos y firmamos el token con ese payload
      user,
    };
  }
}
