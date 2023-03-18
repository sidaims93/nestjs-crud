import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getRoutedMessage(): string {
    return 'I am here!';
  }
}
