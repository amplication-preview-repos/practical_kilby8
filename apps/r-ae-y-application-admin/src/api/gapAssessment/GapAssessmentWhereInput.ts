import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GapAssessmentWhereInput = {
  actionRequired?: StringNullableFilter;
  assessmentArea?: StringNullableFilter;
  gapDescription?: StringNullableFilter;
  id?: StringFilter;
};
