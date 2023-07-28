import { Module } from '@nestjs/common';
import { UtilService } from './util.service';
import { RandomStringModule } from 'src/random-string/random-string.module';

@Module({
  providers: [UtilService],
  exports: [UtilService],
})
export class UtilModule {}
