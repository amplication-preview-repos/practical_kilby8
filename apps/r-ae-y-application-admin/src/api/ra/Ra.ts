import { JsonValue } from "type-fest";

export type Ra = {
  acknowledgedBy: string | null;
  createdAt: Date;
  id: string;
  locationName: string | null;
  preparedBy: string | null;
  raDetails: JsonValue;
  updatedAt: Date;
};
