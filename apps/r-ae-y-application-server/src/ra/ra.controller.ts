import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RaService } from "./ra.service";
import { RaControllerBase } from "./base/ra.controller.base";

@swagger.ApiTags("ras")
@common.Controller("ras")
export class RaController extends RaControllerBase {
  constructor(protected readonly service: RaService) {
    super(service);
  }
}
