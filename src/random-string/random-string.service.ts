import { Injectable } from '@nestjs/common';
import { UtilService } from 'src/util/util.service';

@Injectable()
export class RandomStringService {
  constructor(private utill: UtilService) {}

  public getRandomString(): string[] {
    return this.utill.generateString();
  }
}
