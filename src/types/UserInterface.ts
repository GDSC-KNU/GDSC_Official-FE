export interface signUpUserInterface {
  name: string;
  age: number;
  studentNumber: string;
  major: string;
  phoneNumber: string;
}

export interface userDataInterface {
  name: string;
  profileUrl: string;
  age: number;
  major: string;
  studentNumber: string;
  email: string;
  introduction: string;
  role: 'ROLE_TEMP' | 'ROLE_GUEST' | 'ROLE_MEMBER' | 'ROLE_CORE';
  teamInfos: { teamName: string; teamPageUrl: string }[];
}

export interface putUserDataInterface {
  name?: string;
  profileUrl?: string;
  age?: number;
  major?: string;
  studentNumber?: string;
  email?: string;
  introduction?: string;
}

interface Team {
  id: number;
  teamName: string;
  memberTeams: string[];
  parent: string;
  subTeams: string[];
}

interface MemberTeam {
  id: number;
  member: string;
  team: Team;
}

export interface patchUserStatusInterface {
  createAt: string;
  modifiedAt: string;
  id: number;
  name: string;
  age: number;
  studentNumber: string;
  major: string;
  email: string;
  phoneNumber: string;
  role: 'ROLE_GUEST' | 'ROLE_MEMBER' | 'ROLE_CORE';
  profileUrl: string;
  track: 'FRONT_END' | 'BACK_END' | 'DESIGNER' | 'AI' | 'ANDROID';
  memberTeams: MemberTeam[];
  teams: Team[];
}

export interface patchUserStatusRequest {
  track: string;
  role: string;
  email: string;
}

export interface User {
  name: string;
  status: 'TEMP' | 'CORE' | 'MEMBER' | 'GUEST';
}

export interface blogPostInterface {
  title: string;
  content: string;
  thumbnailUrl: string | null;
  category: 'BACKEND' | 'FRONTEND' | 'ANDROID' | 'AI' | 'DESIGN' | 'ETC';
  status: 'TEMPORAL' | 'SAVED';
}

export interface blogPostMetaDataInterface {
  id: number;
  title: string;
  summary: string;
  thumbnailUrl: string;
  category: string;
  createdAt: string;
  likeCount: number;
  commentCount: number;
  sharedCount: number;
}

export interface blogPostListInterface {
  data: blogPostMetaDataInterface[];
  hasNext: boolean;
  page: number;
  totalPage: number;
}

export type AuthenticatedUser = User;
export type UnauthenticatedUser = 'TEMP';
