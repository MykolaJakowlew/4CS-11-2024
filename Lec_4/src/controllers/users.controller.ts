import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller({ path: '/users' })
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @Post('/')
  createUser(@Body() body: UserDto): string {

    const originalLink = body.originalLink
    if (...)
    return this.appService.getHello();
  }
}
