import { JsonValue } from "type-fest";

export type Document = {
  createdAt: Date;
  fileContent: JsonValue;
  fileName: string | null;
  fileType: string | null;
  id: string;
  updatedAt: Date;
};
