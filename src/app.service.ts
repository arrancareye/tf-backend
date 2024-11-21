import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This is the root route of the API!!! My name is Gio Jojo';
  }
}
 