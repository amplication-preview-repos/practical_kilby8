import * as graphql from "@nestjs/graphql";
import { RaResolverBase } from "./base/ra.resolver.base";
import { Ra } from "./base/Ra";
import { RaService } from "./ra.service";

@graphql.Resolver(() => Ra)
export class RaResolver extends RaResolverBase {
  constructor(protected readonly service: RaService) {
    super(service);
  }
}
