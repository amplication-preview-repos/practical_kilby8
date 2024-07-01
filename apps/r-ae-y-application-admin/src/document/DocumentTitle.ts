import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "fileName";

export const DocumentTitle = (record: TDocument): string => {
  return record.fileName?.toString() || String(record.id);
};
