/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Ra as PrismaRa } from "@prisma/client";

export class RaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RaCountArgs, "select">): Promise<number> {
    return this.prisma.ra.count(args);
  }

  async ras(args: Prisma.RaFindManyArgs): Promise<PrismaRa[]> {
    return this.prisma.ra.findMany(args);
  }
  async ra(args: Prisma.RaFindUniqueArgs): Promise<PrismaRa | null> {
    return this.prisma.ra.findUnique(args);
  }
  async createRa(args: Prisma.RaCreateArgs): Promise<PrismaRa> {
    return this.prisma.ra.create(args);
  }
  async updateRa(args: Prisma.RaUpdateArgs): Promise<PrismaRa> {
    return this.prisma.ra.update(args);
  }
  async deleteRa(args: Prisma.RaDeleteArgs): Promise<PrismaRa> {
    return this.prisma.ra.delete(args);
  }
}