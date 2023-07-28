import { Injectable } from '@nestjs/common';
@Injectable()
export class UtilService {
  public generateString(): string[] {
    // const random = require('random-words');
    const arr = ['1', '2', '3'];
    return arr;
  }
}
