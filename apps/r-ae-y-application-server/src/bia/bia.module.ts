import { Module } from "@nestjs/common";
import { BiaModuleBase } from "./base/bia.module.base";
import { BiaService } from "./bia.service";
import { BiaController } from "./bia.controller";
import { BiaResolver } from "./bia.resolver";

@Module({
  imports: [BiaModuleBase],
  controllers: [BiaController],
  providers: [BiaService, BiaResolver],
  exports: [BiaService],
})
export class BiaModule {}
