import { GapAssessment as TGapAssessment } from "../api/gapAssessment/GapAssessment";

export const GAPASSESSMENT_TITLE_FIELD = "assessmentArea";

export const GapAssessmentTitle = (record: TGapAssessment): string => {
  return record.assessmentArea?.toString() || String(record.id);
};
