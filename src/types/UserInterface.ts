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
  teamInfos: { teamName: string; teamPageUrl: string }[];
}