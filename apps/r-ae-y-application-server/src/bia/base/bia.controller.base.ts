/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BiaService } from "../bia.service";
import { BiaCreateInput } from "./BiaCreateInput";
import { Bia } from "./Bia";
import { BiaFindManyArgs } from "./BiaFindManyArgs";
import { BiaWhereUniqueInput } from "./BiaWhereUniqueInput";
import { BiaUpdateInput } from "./BiaUpdateInput";

export class BiaControllerBase {
  constructor(protected readonly service: BiaService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Bia })
  async createBia(@common.Body() data: BiaCreateInput): Promise<Bia> {
    return await this.service.createBia({
      data: data,
      select: {
        bcpCoordinatorName: true,
        createdAt: true,
        departmentDescription: true,
        departmentName: true,
        id: true,
        secondarySpocName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Bia] })
  @ApiNestedQuery(BiaFindManyArgs)
  async bias(@common.Req() request: Request): Promise<Bia[]> {
    const args = plainToClass(BiaFindManyArgs, request.query);
    return this.service.bias({
      ...args,
      select: {
        bcpCoordinatorName: true,
        createdAt: true,
        departmentDescription: true,
        departmentName: true,
        id: true,
        secondarySpocName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Bia })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async bia(@common.Param() params: BiaWhereUniqueInput): Promise<Bia | null> {
    const result = await this.service.bia({
      where: params,
      select: {
        bcpCoordinatorName: true,
        createdAt: true,
        departmentDescription: true,
        departmentName: true,
        id: true,
        secondarySpocName: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Bia })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBia(
    @common.Param() params: BiaWhereUniqueInput,
    @common.Body() data: BiaUpdateInput
  ): Promise<Bia | null> {
    try {
      return await this.service.updateBia({
        where: params,
        data: data,
        select: {
          bcpCoordinatorName: true,
          createdAt: true,
          departmentDescription: true,
          departmentName: true,
          id: true,
          secondarySpocName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Bia })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBia(
    @common.Param() params: BiaWhereUniqueInput
  ): Promise<Bia | null> {
    try {
      return await this.service.deleteBia({
        where: params,
        select: {
          bcpCoordinatorName: true,
          createdAt: true,
          departmentDescription: true,
          departmentName: true,
          id: true,
          secondarySpocName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
