import { Module } from "@nestjs/common";
import { UtilModule } from "../util/util.module";
import { RandomStringService } from "./random-string.service";

@Module({
  imports: [UtilModule],
  providers: [RandomStringService],
  exports: [RandomStringService],
})
export class RandomStringModule {}
