import { BiaWhereInput } from "./BiaWhereInput";
import { BiaOrderByInput } from "./BiaOrderByInput";

export type BiaFindManyArgs = {
  where?: BiaWhereInput;
  orderBy?: Array<BiaOrderByInput>;
  skip?: number;
  take?: number;
};
