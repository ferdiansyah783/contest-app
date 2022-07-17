import { Controller, Get, Inject, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('profil')
  @UseGuards(JwtAuthGuard)
  getProfil(@Request() req) {
    return req.user;
  }
}
