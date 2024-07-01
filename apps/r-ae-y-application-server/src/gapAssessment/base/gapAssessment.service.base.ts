/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, GapAssessment as PrismaGapAssessment } from "@prisma/client";

export class GapAssessmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.GapAssessmentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.gapAssessment.count(args);
  }

  async gapAssessments(
    args: Prisma.GapAssessmentFindManyArgs
  ): Promise<PrismaGapAssessment[]> {
    return this.prisma.gapAssessment.findMany(args);
  }
  async gapAssessment(
    args: Prisma.GapAssessmentFindUniqueArgs
  ): Promise<PrismaGapAssessment | null> {
    return this.prisma.gapAssessment.findUnique(args);
  }
  async createGapAssessment(
    args: Prisma.GapAssessmentCreateArgs
  ): Promise<PrismaGapAssessment> {
    return this.prisma.gapAssessment.create(args);
  }
  async updateGapAssessment(
    args: Prisma.GapAssessmentUpdateArgs
  ): Promise<PrismaGapAssessment> {
    return this.prisma.gapAssessment.update(args);
  }
  async deleteGapAssessment(
    args: Prisma.GapAssessmentDeleteArgs
  ): Promise<PrismaGapAssessment> {
    return this.prisma.gapAssessment.delete(args);
  }
}
