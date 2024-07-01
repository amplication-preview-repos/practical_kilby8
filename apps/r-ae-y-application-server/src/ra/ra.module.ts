import { Module } from "@nestjs/common";
import { RaModuleBase } from "./base/ra.module.base";
import { RaService } from "./ra.service";
import { RaController } from "./ra.controller";
import { RaResolver } from "./ra.resolver";

@Module({
  imports: [RaModuleBase],
  controllers: [RaController],
  providers: [RaService, RaResolver],
  exports: [RaService],
})
export class RaModule {}
