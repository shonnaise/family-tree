import { Gender } from "@prisma/client";

export type Person = {
  personId: string;
  name: string;
  gender: Gender;
  aliving: boolean;
  birthDate: Date;
  deadDate: Date;
};
