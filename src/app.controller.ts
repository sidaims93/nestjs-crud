import { Controller, Get, Post, HttpCode, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('myroute')
  getRoutedMessage(): string {
    return this.appService.getRoutedMessage();
  }

  @Post()
  @HttpCode(201)
  create(): string {
    return 'This action adds a new cat';
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
