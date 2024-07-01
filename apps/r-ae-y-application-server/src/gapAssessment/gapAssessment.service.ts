import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GapAssessmentServiceBase } from "./base/gapAssessment.service.base";

@Injectable()
export class GapAssessmentService extends GapAssessmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
