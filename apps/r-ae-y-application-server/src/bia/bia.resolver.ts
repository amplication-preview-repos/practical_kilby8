import * as graphql from "@nestjs/graphql";
import { BiaResolverBase } from "./base/bia.resolver.base";
import { Bia } from "./base/Bia";
import { BiaService } from "./bia.service";

@graphql.Resolver(() => Bia)
export class BiaResolver extends BiaResolverBase {
  constructor(protected readonly service: BiaService) {
    super(service);
  }
}
