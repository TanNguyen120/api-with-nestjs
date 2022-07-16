import { Injectable } from '@nestjs/common';

// dependencies injection
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! This is the main interface of this nestjs API';
  }
}
