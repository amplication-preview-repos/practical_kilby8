import { Module } from "@nestjs/common";
import { GapAssessmentModuleBase } from "./base/gapAssessment.module.base";
import { GapAssessmentService } from "./gapAssessment.service";
import { GapAssessmentController } from "./gapAssessment.controller";
import { GapAssessmentResolver } from "./gapAssessment.resolver";

@Module({
  imports: [GapAssessmentModuleBase],
  controllers: [GapAssessmentController],
  providers: [GapAssessmentService, GapAssessmentResolver],
  exports: [GapAssessmentService],
})
export class GapAssessmentModule {}
