import * as graphql from "@nestjs/graphql";
import { GapAssessmentResolverBase } from "./base/gapAssessment.resolver.base";
import { GapAssessment } from "./base/GapAssessment";
import { GapAssessmentService } from "./gapAssessment.service";

@graphql.Resolver(() => GapAssessment)
export class GapAssessmentResolver extends GapAssessmentResolverBase {
  constructor(protected readonly service: GapAssessmentService) {
    super(service);
  }
}
