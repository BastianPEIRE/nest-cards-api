import { Controller, Get } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): Promise<User[]> {
    return this.userService.findAll();
  }
}
