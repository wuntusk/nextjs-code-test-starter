/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LevelOfCare, EnumStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: Programs
// ====================================================

export interface Programs_programs_attendance {
  __typename: "Attendance";
  status: EnumStatus | null;
  residentId: string;
}

export interface Programs_programs_recurrence {
  __typename: "Recurrence";
  frequency: string | null;
  count: number | null;
}

export interface Programs_programs {
  __typename: "Program";
  id: string;
  parentId: string | null;
  location: string;
  allDay: boolean;
  tags: string[];
  name: string;
  start: DateTime;
  end: DateTime;
  dimension: string;
  facilitators: string[];
  levelOfCare: LevelOfCare[];
  hobbies: string[];
  isRepeated: boolean | null;
  attendance: Programs_programs_attendance[];
  recurrence: Programs_programs_recurrence | null;
}

export interface Programs {
  programs: Programs_programs[];
}
