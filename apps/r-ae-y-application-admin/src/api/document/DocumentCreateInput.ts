import { InputJsonValue } from "../../types";

export type DocumentCreateInput = {
  fileContent?: InputJsonValue;
  fileName?: string | null;
  fileType?: string | null;
};
