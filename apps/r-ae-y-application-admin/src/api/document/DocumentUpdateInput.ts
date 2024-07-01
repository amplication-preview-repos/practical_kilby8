import { InputJsonValue } from "../../types";

export type DocumentUpdateInput = {
  fileContent?: InputJsonValue;
  fileName?: string | null;
  fileType?: string | null;
};
