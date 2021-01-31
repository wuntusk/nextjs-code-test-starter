/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EnumStatus, LevelOfCare, Ambulation } from "./globalTypes";

// ====================================================
// GraphQL query operation: Residents
// ====================================================

export interface Residents_residents_attendance {
  __typename: "Attendance";
  status: EnumStatus | null;
  residentId: string;
}

export interface Residents_residents {
  __typename: "Resident";
  id: string;
  name: string;
  preferredName: string | null;
  status: string | null;
  firstName: string;
  lastName: string;
  room: string;
  attendance: Residents_residents_attendance[];
  birthDate: DateTime;
  moveInDate: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
  levelOfCare: LevelOfCare | null;
  ambulation: Ambulation | null;
}

export interface Residents {
  residents: Residents_residents[];
}
