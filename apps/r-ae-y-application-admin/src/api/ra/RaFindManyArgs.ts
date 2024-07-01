import { RaWhereInput } from "./RaWhereInput";
import { RaOrderByInput } from "./RaOrderByInput";

export type RaFindManyArgs = {
  where?: RaWhereInput;
  orderBy?: Array<RaOrderByInput>;
  skip?: number;
  take?: number;
};
