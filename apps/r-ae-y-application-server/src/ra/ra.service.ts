import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RaServiceBase } from "./base/ra.service.base";

@Injectable()
export class RaService extends RaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
