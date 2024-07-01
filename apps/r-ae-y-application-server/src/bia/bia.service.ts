import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BiaServiceBase } from "./base/bia.service.base";

@Injectable()
export class BiaService extends BiaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
