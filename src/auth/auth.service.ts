import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { User } from 'src/untities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  signup(createUser: CreateUserDto) {
    const newUser = this.userRepository.create(createUser);
    return this.userRepository.save(newUser);
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (user && user.password === password) {
      const { password, ...result } = user;
      console.log(password);
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      email: user.email,
      username: user.username,
      sub: user.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
