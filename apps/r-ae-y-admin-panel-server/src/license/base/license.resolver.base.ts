/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { License } from "./License";
import { LicenseCountArgs } from "./LicenseCountArgs";
import { LicenseFindManyArgs } from "./LicenseFindManyArgs";
import { LicenseFindUniqueArgs } from "./LicenseFindUniqueArgs";
import { CreateLicenseArgs } from "./CreateLicenseArgs";
import { UpdateLicenseArgs } from "./UpdateLicenseArgs";
import { DeleteLicenseArgs } from "./DeleteLicenseArgs";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { LicenseService } from "../license.service";
@graphql.Resolver(() => License)
export class LicenseResolverBase {
  constructor(protected readonly service: LicenseService) {}

  async _licensesMeta(
    @graphql.Args() args: LicenseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [License])
  async licenses(
    @graphql.Args() args: LicenseFindManyArgs
  ): Promise<License[]> {
    return this.service.licenses(args);
  }

  @graphql.Query(() => License, { nullable: true })
  async license(
    @graphql.Args() args: LicenseFindUniqueArgs
  ): Promise<License | null> {
    const result = await this.service.license(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => License)
  async createLicense(
    @graphql.Args() args: CreateLicenseArgs
  ): Promise<License> {
    return await this.service.createLicense({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => License)
  async updateLicense(
    @graphql.Args() args: UpdateLicenseArgs
  ): Promise<License | null> {
    try {
      return await this.service.updateLicense({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => License)
  async deleteLicense(
    @graphql.Args() args: DeleteLicenseArgs
  ): Promise<License | null> {
    try {
      return await this.service.deleteLicense(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [User], { name: "users" })
  async findUsers(
    @graphql.Parent() parent: License,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
