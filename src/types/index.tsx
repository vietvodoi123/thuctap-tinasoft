import { UploadFile } from "antd/es/upload/interface";
import React from "react";

export interface ICreateCompanyBody {
  photoFile: UploadFile | null;
  memberSize: string;
  website: string;
  contactEmail: string;
  displayName: string;
  description: string;
}

export interface ICreateDepartment {
  photoFile: File | null;
  type: string;
  parenId: number;
  numberOfMenber: number;
  displayName: string;
  description: string;
}

export interface IDataDepartment {
  status: number;
  company: object;
  type: string;
  parent: object;
  children: [object];
  numberOfMember: number;
  parentId: number;
  companyId: number;
  displayName: string;
  description: string;
  photoPath: string;
  numberOfUser: number;
  createdById: number;
  updatedById: number;
  deletedById: number;
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
export interface ICreatePositions {
  photoFile: File | null;
  displayName: string;
  permissions: string;
  deptId: number;
  description: string;
}

export interface IDataPositions {
  status: number;
  company: object;
  permissions: string[];
  dept: object;
  deptId: number;
  companyId: number;
  displayName: string;
  description: string;
  photoPath: string;
  numberOfUser: number;
  createdById: number;
  updatedById: number;
  deletedById: number;
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface IDataCompany {
  status: number;
  memberSize: string;
  website: string;
  contactEmail: string;
  displayName: string;
  description: string;
  photoPath: string;
  photoUrl: string;
  numberOfUser: number;
  createdById: number;
  updatedById: number;
  deletedById: number;
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface IDetailTax {
  deductionFamilyCircumstances?: number;
  deductionOwn?: number;
  taxableSalary?: number;
  taxSalary?: number;
  tax?: number;
}

export interface CommonReduxAction {
  type: string;
}

export interface CommonReactProps {
  children: React.ReactNode;
}

export interface ISettingId {
  _id?: string;
  themes?: string;
  location?: string;
  region?: string;
  language?: string;
  referCode?: string;
}

export enum IAccountRole {
  USER = 0,
  ADMIN = 1,
  ANONYMOUS = 2,
  MANAGER,
}

export enum IState {
  INACTIVE,
  ACTIVE,
  DELETED,
}

export enum EUserGender {
  Other = "Khác",
  Male = "Nam",
  Female = "Nữ",
}

export enum TypeOfAction {
  EDIT = "EDIT",
  ADD = "ADD",
}

export interface IPermission {
  id: number;
  permissionKey: string;
  permissionName: string;
}

export interface IWorkType {
  id: number;
  name?: string;
  description?: string;
}

export interface IDataCost {
  April: number;
  August: number;
  December: number;
  February: number;
  January: number;
  July: number;
  June: number;
  March: number;
  May: number;
  November: number;
  October: number;
  September: number;
}

export interface IDataProjectList {
  name?: string;
  id?: number;
  state?: number;
  startDate?: string;
  endDate?: string;
  scale?: number;
  customer?: string;
  technicality?: string;
  description?: string;
  project?: {
    id: number;
    name: string;
  };
  projectManager?: {
    id: number;
    avatar: string;
    fullName: string;
    email: string;
    employeeCode: string;
    personId: string;
    dateOfBirth: string;
    address: string;
    phoneNumber: string;
    phoneNumberRelative: string;
  };
}

export interface IDataOnsite {
  id: number;
  dayOnWeek?: string;
  projectId?: number;
  day?: number | string;
  onsitePlace?: string;
  project?: number;
  salary?: number;
  date?: string;
  state?: number;
  action?: boolean;
}

export interface IDataOverTime {
  id: number;
  dayOnWeek?: string;
  day?: number | string;
  date?: string;
  state?: number;
  action?: boolean;
  hour?: number | string;
  projectName?: string;
  projectId?: number;
  project?: {
    id: number;
    name: string;
    projectManager: {
      state: number;
      gender: string;
      englishCertificate: string;
      role: {
        id: number;
        roleName: string;
        permissions: [
          {
            id: number;
            permissionName: string;
            permissionKey: "";
          }
        ];
      };
    };
  };
}

export interface IDataProject {
  id?: number;
  date?: string;
  salary?: number;
  projectName?: string;
  project?: {
    id: number;
    name: string;
    projectManager: {
      state: number;
      gender: string;
      englishCertificate: string;
      role: {
        id: number;
        roleName: string;
        permissions: [
          {
            id: number;
            permissionName: string;
            permissionKey: "";
          }
        ];
      };
    };
  };
}

export interface IDataBonus {
  id?: number;
  date?: string;
  reason?: string;
  salary?: number;
  projectName?: string;
  project?: {
    id: number;
    name: string;
    projectManager: {
      state: number;
      gender: string;
      englishCertificate: string;
      role: {
        id: number;
        roleName: string;
        permissions: [
          {
            id: number;
            permissionName: string;
            permissionKey: "";
          }
        ];
      };
    };
  };
}

export interface IDataDeductionDay {
  id?: number;
  date?: string;
  dayOffWork?: number;
  hourLateWork?: number;
  deductionSalaryDay?: number | string;
  deductionSalaryHour?: number | string;
  type?: string;
}

export interface IDataSalaryToTalOfUser {
  id: number;
  baseSalary: number;
  onsiteSalary: number;
  overtimeSalary: number;
  projectSalary: number;
  bonusSalary: number;
  manageSalary: number;
  deductionSalary: number;
  taxSalary: number;
  date: string;
  state: number;
  user: {
    id: number;
    avatar: string;
    fullName: string;
    email: string;
  };
  hourOT: number;
  dayOS: number;
  totalSalary: number;
  detailTaxSalary: IDetailTax;
  afterTaxSalary: number;
  dailyOnsiteRate: number;
}

export interface IProfile {
  id: string;
  avatar?: string;
  fullName?: string;
  email?: string;
  employeeCode?: string;
  personId?: string;
  dateOfBirth?: string;
  address?: string;
  phoneNumber?: string;
  phoneNumberRelative?: string;
  baseSalary?: number;
  manageSalary?: number;
  deductionOwn?: number;
  workRoom?: string;
  state?: number;
  gender?: string;
  englishCertificate?: string;
  englishScore?: number;
}

export interface IDataSalary {
  afterTaxSalary: number;
  baseSalary: number;
  bonusSalary: number;
  createdAt: string;
  date: string;
  deductionSalary: number;
  id: number;
  manageSalary: number;
  onsiteSalary: number;
  overtimeSalary: number;
  projectSalary: number;
  state: number;
  taxSalary: number;
  totalSalary: number;
  updatedAt: string;
  detailTaxSalary: IDetailTax;
  dailyOnsiteRate: number;
  user: IProfile;
}

export interface IFamilyCircumstance {
  id?: number | null;
  userId: number;
  fullName: string;
  personId: string | null;
  dateOfBirth?: string | null;
  relationship: string;
  phoneNumber: string;
}

export type UserGender = "Other" | "Male" | "Female";
export type EnglishCertificate = "Other" | "Toeic" | "Toefl" | "Ielts" | "";

export interface IUserLogin {
  fullName?: string;
  username?: string;
  email?: string;
  isVerified?: boolean;
  status: number;
  role?: string;
  avatar?: string;
  profileId?: number;
  profile?: {
    id?: number;
    oldRange?: string;
    knowVia?: number;
    didUseOtherApp?: boolean;
    understoodInstructions?: [number];
    theme?: number;
    workspaceId?: number;
    language?: string;
    phone?: string;
  };
  createdById?: number;
  updatedById?: number;
  deletedById?: number;
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export interface IDataProjectSalary {
  projectName?: string;
  projectSalary?: number | string;
}

export interface IAccountInfo {
  user?: IUserLogin;
  accessToken?: string;
  refreshToken?: string;
  isConfirmed?: boolean;
  dataProfile?: IProfile;
  role?: {
    id: number;
    roleName: string;
    permissions: IPermission[];
  };
}

export interface ILeaveWork {
  id: number;
  user?: IProfile;
  startDate?: string;
  reason?: string;
  reasonRefuse?: string;
  quantity?: number;
  state?: number;
}

export interface IWorkSchedule {
  id: number;
  state?: number;
  user?: {
    id: number;
    email: string;
    fullName: string;
  };
  workingDay: {
    day?: number;
    session?: string;
    startTime?: string;
    endTime?: string;
    note?: string;
  }[];
}
export interface time {
  hour?: string;
  minute?: string;
}
export interface IWorkScheduleCustom {
  day?: string;
  session?: string;
  startTime?: time;
  endTime?: time;
  note?: string;
}

export interface IWorkingDaySchedule {
  day?: number;
  session?: string;
  startTime?: string;
  endTime?: string;
  note?: string;
}

export interface IEvent {
  id?: number;
  title?: string;
  content?: string;
  startDate?: string;
  endDate?: string;
}

export interface IPosition {
  id: number;
  name?: string;
  description?: string;
}

export interface IProject {
  id: number;
  name?: string;
  startDate?: string;
  endDate?: string;
  scale?: number;
  customer?: string;
  technicality?: string;
  use?: string;
  description?: string;
  state?: number;
  projectManager?: IProfile;
  projectProgress?: number;
}

export enum ERolePosition {
  BACKEND_DEV = 0,
  FRONTEND_DEV = 1,
  MOBILE_DEV = 2,
  FULLSTACK = 3,
  TESTER = 4,
  SYSTEM_ADMIN = 5,
  DESIGNER = 6,
  PM = 7,
  DEVOPS = 8,
  BA = 9,
  QA = 10,
}

export interface IProjectMember {
  id: number;
  role?: ERolePosition;
  contract?: number;
  reality?: number;
  overtime?: number;
  startDate?: string;
  endDate?: string;
  project: IProject;
  user: IProfile;
}

export interface ISetStateModal {
  startDate?: string;
  endDate?: string;
  quantity?: number;
  reason?: string;
  refuseReason?: string;
  title?: string;
  content?: string;
  name?: string;
  description?: string;
}

export interface IRules {
  tittle?: string;
  link?: string;
  startTime?: string;
}

// export enum EUserGender {
//   OTHER = "Other",
//   MALE = "Male",
//   FEMALE = "Female",
// }

export enum EEnglishCertificate {
  TOEIC = "Toeic",
  TOEFL = "Toefl",
  IELTS = "Ielts",
  OTHER = "Other",
}

export enum ELeaveWork {
  DANG_CHO_DUYET = 0,
  DA_CHAP_NHAN = 1,
  BI_TU_CHOI = 2,
}

export enum EProjectState {
  MOI_KHOI_TAO = 0,
  DANG_THUC_HIEN = 1,
  DA_KET_THUC = 2,
  DA_HUY = 3,
}
