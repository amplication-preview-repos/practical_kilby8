import { InputJsonValue } from "../../types";

export type RaCreateInput = {
  acknowledgedBy?: string | null;
  locationName?: string | null;
  preparedBy?: string | null;
  raDetails?: InputJsonValue;
};
