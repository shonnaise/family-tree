import { Person } from "@prisma/client";

export type Tree = {
  treeId: string;
  treeName: string;
  mainPerson: Person;
};
