import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userServise: UserService) {}

  @Get('fullUser')
  getUser() {
    return this.userServise.getUsers();
  }
}
