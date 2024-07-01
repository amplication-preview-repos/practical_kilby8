import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BiaService } from "./bia.service";
import { BiaControllerBase } from "./base/bia.controller.base";

@swagger.ApiTags("bias")
@common.Controller("bias")
export class BiaController extends BiaControllerBase {
  constructor(protected readonly service: BiaService) {
    super(service);
  }
}
