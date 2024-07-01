import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GapAssessmentService } from "./gapAssessment.service";
import { GapAssessmentControllerBase } from "./base/gapAssessment.controller.base";

@swagger.ApiTags("gapAssessments")
@common.Controller("gapAssessments")
export class GapAssessmentController extends GapAssessmentControllerBase {
  constructor(protected readonly service: GapAssessmentService) {
    super(service);
  }
}
