import { InputJsonValue } from "../../types";

export type RaUpdateInput = {
  acknowledgedBy?: string | null;
  locationName?: string | null;
  preparedBy?: string | null;
  raDetails?: InputJsonValue;
};
